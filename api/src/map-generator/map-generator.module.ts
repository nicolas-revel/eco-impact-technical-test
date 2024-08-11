import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { MapGeneratorController } from "./map-generator.controller";
import { MapGeneratorService } from "./map-generator.service";

@Module({
  providers: [MapGeneratorService, PrismaService],
  controllers: [MapGeneratorController],
})
export class MapGeneratorModule {}
