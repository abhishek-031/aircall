import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppContext = () => {
  const store = useContext(AppContext);
  return store;
};
