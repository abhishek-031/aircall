import { createContext } from "react";

export const initialState = {
  selectedTab: 0,
  activities: [],
};

export const AppContext = createContext(initialState);
