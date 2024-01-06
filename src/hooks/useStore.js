import { useReducer } from "react";
import { initialState } from "../context/AppContext";

export const ActionTypes = {
  CHANGE_TAB: "CHANGE_TAB",
  ACTIVITIES_FETCHED: "ACTIVITIES_FETCHED",
};

export const createAction = (actionType, payload) => {
  return {
    type: actionType,
    payload,
  };
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_TAB:
      return Object.assign({}, state, { selectedTab: action.payload });
    case ActionTypes.ACTIVITIES_FETCHED:
      return Object.assign({}, state, { activities: action.payload });
    default:
      return copiedState;
  }
}

export function useStore() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}
