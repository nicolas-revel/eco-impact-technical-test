import { Biome } from "./biome.type";

export type MapConfigType = {
  availableBiome: Biome[];
  baseBiome: Biome;
  numberOfBiomes: number;
  width: number;
  height: number;
};
