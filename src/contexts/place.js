import React, { createContext, useReducer } from "react";
import placeReducer from "../reducers/placeReducer";

export const placeContext = createContext();

const PlaceContextProvider = ({ children }) => {
  const [places, dispatch] = useReducer(placeReducer, []);
  return (
    <placeContext.Provider value={{ places, dispatch }}>
      {children}
    </placeContext.Provider>
  );
};

export default PlaceContextProvider;
