import { Module } from "@nestjs/common";
import { MapGeneratorModule } from "./map-generator/map-generator.module";
import { PrismaService } from "./prisma.service";

@Module({
  providers: [PrismaService],
  imports: [MapGeneratorModule],
})
export class AppModule {}
