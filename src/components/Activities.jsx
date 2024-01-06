import React from "react";
import Activity from "./Activity.jsx";
import { useAppContext } from "../hooks/useAppContext.js";

export const Activities = () => {
  const { state } = useAppContext();
  return (
    <React.Fragment>
      {state.activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </React.Fragment>
  );
};
