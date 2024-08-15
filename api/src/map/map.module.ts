import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { MapGeneratorController } from "./map.controller";
import { MapGeneratorService } from "./map.service";

@Module({
  providers: [MapGeneratorService, PrismaService],
  controllers: [MapGeneratorController],
})
export class MapGeneratorModule {}
