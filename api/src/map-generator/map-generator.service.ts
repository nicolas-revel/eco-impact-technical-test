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

    for (let i = 0; i < config.availableBiome.length; i++) {
      const biome = config.availableBiome[i];
      map = this.generateBiomeMap(biome, config.width, config.height);
    }

    return map;
  }

  getBaseMap(width: number, height: number, baseBiome: Biome): object {
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

  generateBiomeMap(biome: Biome, width: number, height: number): object {
    const grid: Cell[][] = [];

    for (let i = 0; i < width; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < height; j++) {
        row.push({
          x: i,
          y: j,
          biome,
        });
      }
      grid.push(row);
    }

    return {
      width,
      height,
      grid,
    };
  }
}
