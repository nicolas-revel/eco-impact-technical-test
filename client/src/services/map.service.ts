import { MapConfigType } from "@shared/types/map.types";

export const mapService = {
  generateMap: async (mapConfig: MapConfigType) => {
    const response = await fetch("http://localhost:3000/maps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapConfig),
    });
    return await response.json();
  },
};
