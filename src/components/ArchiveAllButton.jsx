import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import {
  ARCHIVE_ALL_ACTIVITIES,
  RESET_ALL_ACTIVITIES,
} from "../utility/ApiCalls";
import archiveIcon from "../icons/archive-icon.svg";
import unArchiveIcon from "../icons/unarchive-icon.svg";

export default function ArchiveAllButton() {
  const { state, dispatch } = useAppContext();
  const buttonText =
    state.selectedTab === 0 ? "Archive All Calls" : "Unarchive All Calls";
  const icon = state.selectedTab === 0 ? archiveIcon : unArchiveIcon;

  const archiveOrUnarchiveAll = () => {
    if (state.selectedTab === 0) {
      ARCHIVE_ALL_ACTIVITIES(state.activities, dispatch);
    } else {
      RESET_ALL_ACTIVITIES(dispatch);
    }
  };

  return (
    <div className="archive-button" onClick={archiveOrUnarchiveAll}>
      <img src={icon} />
      <span>{buttonText}</span>
    </div>
  );
}
