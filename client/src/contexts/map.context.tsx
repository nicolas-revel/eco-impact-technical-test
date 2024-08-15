import { MapType } from "@shared/types/map.type";
import { createContext, ReactNode, useReducer } from "react";
import { initialState, mapReducer } from "../reducers/map.reducer";
import { MapActionType } from "../types/map-action.type";

export const MapContext = createContext<
  | {
      state: MapType;
      dispatch: React.Dispatch<MapActionType>;
    }
  | undefined
>(undefined);

export const MapProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  );
};
