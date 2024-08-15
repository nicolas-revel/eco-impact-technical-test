import { MapConfigType } from "@shared/types/map-config.type";
import { MapType } from "@shared/types/map.type";

export type MapActionType =
  | { type: "SET_MAP"; payload: MapType }
  | { type: "GENERATE_MAP"; payload: MapConfigType };
