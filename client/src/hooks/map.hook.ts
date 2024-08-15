import { MapConfigType } from "@shared/types/map.type";
import { useCallback, useContext } from "react";
import { MapContext } from "../contexts/map.context";
import { mapService } from "../services/map.service";

export const useMap = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMap must be used within a MapProvider");
  }

  const { state, dispatch } = context;

  const generateMap = useCallback(
    async (mapConfig: MapConfigType) => {
      try {
        dispatch({ type: "GENERATE_MAP", payload: mapConfig });
        const newMap = await mapService.generateMap(mapConfig);
        dispatch({ type: "SET_MAP", payload: newMap });
        return newMap;
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  return {
    ...state,
    generateMap,
  };
};
