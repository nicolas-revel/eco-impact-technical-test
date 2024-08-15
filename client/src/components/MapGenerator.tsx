import { BiomeType } from "@shared/types/biome.type";

export default function MapGenerator() {
  const availableBiomes: BiomeType[] = ["plain", "desert", "forest", "ocean"];

  return (
    <>
      <label>
        Width:
        <input
          type="number"
          value={mapConfig.width}
          onChange={(e) =>
            setMapConfig({ ...mapConfig, width: parseInt(e.target.value) })
          }
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={mapConfig.height}
          onChange={(e) =>
            setMapConfig({ ...mapConfig, height: parseInt(e.target.value) })
          }
        />
      </label>
      <label>
        Base biome:
        <select
          value={mapConfig.baseBiome}
          onChange={(e) =>
            setMapConfig({
              ...mapConfig,
              baseBiome: e.target.value as BiomeType,
            })
          }
        >
          {availableBiomes.map((biome) => (
            <option key={biome} value={biome}>
              {biome}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of biomes:
        <input
          type="number"
          value={mapConfig.numberOfBiomes}
          onChange={(e) =>
            setMapConfig({
              ...mapConfig,
              numberOfBiomes: parseInt(e.target.value),
            })
          }
        />
      </label>
      <label>
        Available biomes:
        <select
          multiple
          value={mapConfig.availableBiome}
          onChange={(e) =>
            setMapConfig({
              ...mapConfig,
              availableBiome: Array.from(
                e.target.selectedOptions,
                (option) => option.value as BiomeType
              ),
            })
          }
        >
          {availableBiomes.map((biome) => (
            <option key={biome} value={biome}>
              {biome}
            </option>
          ))}
        </select>
      </label>

      <button onClick={generateMap}>Generate map</button>
    </>
  );
}
