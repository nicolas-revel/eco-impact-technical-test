import { Body, Controller, Post } from "@nestjs/common";
import { MapConfigType } from "../../../shared/types/types/map-config.type";
import { MapGeneratorService } from "./map.service";

@Controller("maps")
export class MapGeneratorController {
  constructor(private readonly mapGeneratorService: MapGeneratorService) {}

  @Post()
  async generateMap(@Body() mapConfig: MapConfigType) {
    return await this.mapGeneratorService.generateMap(mapConfig);
  }
}
