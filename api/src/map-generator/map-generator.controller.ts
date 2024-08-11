import { Body, Controller, Post } from "@nestjs/common";
import { MapConfigType } from "src/types/map-config.type";
import { MapGeneratorService } from "./map-generator.service";

@Controller("maps")
export class MapGeneratorController {
  constructor(private readonly mapGeneratorService: MapGeneratorService) {}

  @Post()
  generateMap(@Body() map: MapConfigType) {
    return this.mapGeneratorService.generateMap(map);
  }
}
