import React from "react";
import { ActionTypes, createAction } from "../hooks/useStore";
import { useAppContext } from "../hooks/useAppContext";
import logo from "../icons/logo.svg";

const Header = () => {
  const { state, dispatch } = useAppContext();

  const changeTab = (changeTo) => {
    dispatch(createAction(ActionTypes.CHANGE_TAB, changeTo));
  };

  return (
    <header>
      <img height="30" src={logo} />
      <div>
        <button
          onClick={() => changeTab(0)}
          data-active={state.selectedTab === 0}
        >
          All Activity
        </button>
        <button
          onClick={() => changeTab(1)}
          data-active={state.selectedTab === 1}
        >
          Archived
        </button>
      </div>
    </header>
  );
};

export default Header;
