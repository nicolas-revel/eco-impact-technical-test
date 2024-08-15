import { MapType } from "@shared/types/map.type";
import { MapActionType } from "../types/map-action.type";

export const initialState: MapType = {
  width: 0,
  height: 0,
  grid: [],
};

export const mapReducer = (state: MapType, action: MapActionType): MapType => {
  switch (action.type) {
    case "SET_MAP":
      return { ...state, ...action.payload };
    case "GENERATE_MAP":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
