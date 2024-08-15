import { Injectable } from "@nestjs/common";
import { Biome } from "@shared/types/biome.type";
import { Cell } from "@shared/types/cell.type";
import { MapConfigType } from "@shared/types/map-config.type";
import { MapType } from "@shared/types/map.type";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class MapGeneratorService {
  constructor(private readonly prismaService: PrismaService) {}
  async generateMap(config: MapConfigType): Promise<MapType> {
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
    await this.prismaService.map.create({
      data: {
        width: map.width,
        height: map.height,
        content: JSON.stringify(map.grid),
      },
    });

    return map;
  }

  private getBaseMap(width: number, height: number, baseBiome: Biome): MapType {
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

  private generateRandomShapedBiome(
    grid: Cell[][],
    biome: Biome,
    width: number,
    height: number
  ): Cell[][] {
    const biomeWidth = Math.floor(Math.random() * width) || 1;
    const biomeHeight = Math.floor(Math.random() * height) || 1;
    const x = Math.floor(Math.random() * (width - biomeWidth));
    const y = Math.floor(Math.random() * (height - biomeHeight));
    for (let i = x; i < x + biomeWidth; i++) {
      for (let j = y; j < y + biomeHeight; j++) {
        grid[i][j].biome = biome;
      }
    }

    return grid;
  }
}
