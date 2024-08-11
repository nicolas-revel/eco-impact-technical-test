import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Biome } from "src/types/biome.type";
import { Cell } from "src/types/cell.type";
import { MapConfigType } from "src/types/map-config.type";

@Injectable()
export class MapGeneratorService {
  constructor(private readonly prismaService: PrismaService) {}
  generateMap(config: MapConfigType) {
    let map = this.getBaseMap(config.width, config.height, config.baseBiome);

    for (let i = 0; i < config.numberOfBiomes; i++) {
      const biome =
        config.availableBiome[
          Math.floor(Math.random() * config.availableBiome.length)
        ];

      map.grid = this.generateRandomShapedBiome(
        map.grid,
        biome,
        config.width,
        config.height
      );
    }

    return map;
  }

  getBaseMap(
    width: number,
    height: number,
    baseBiome: Biome
  ): {
    width: number;
    height: number;
    grid: Cell[][];
  } {
    const grid: Cell[][] = [];

    for (let i = 0; i < width; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < height; j++) {
        row.push({
          x: i,
          y: j,
          biome: baseBiome,
        });
      }
      grid.push(row);
    }

    const baseMap = {
      width,
      height,
      grid,
    };

    return baseMap;
  }

  // Generate a random shaped biome that can be a rectangle
  generateRandomShapedBiome(
    grid: Cell[][],
    biome: Biome,
    width: number,
    height: number
  ): Cell[][] {
    // Randomly generate the width and height of the biome. Must be at least 1
    const biomeWidth = Math.floor(Math.random() * width) || 1;
    const biomeHeight = Math.floor(Math.random() * height) || 1;

    // Randomly generate the x and y position of the biome must be within the grid
    const x = Math.floor(Math.random() * (width - biomeWidth));
    const y = Math.floor(Math.random() * (height - biomeHeight));

    // Update the grid with the new biome
    for (let i = x; i < x + biomeWidth; i++) {
      for (let j = y; j < y + biomeHeight; j++) {
        console.log(`Updating cell at x: ${i}, y: ${j}`);
        grid[i][j].biome = biome;
      }
    }

    console.log(
      `Generated a ${biome} biome at x: ${x}, y: ${y}, width: ${biomeWidth}, height: ${biomeHeight}`
    );

    return grid;
  }
}
