import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import {
  ARCHIVE_ALL_ACTIVITIES,
  RESET_ALL_ACTIVITIES,
} from "../utility/ApiCalls";

export default function ArchiveAllButton() {
  const { state, dispatch } = useAppContext();
  const buttonText =
    state.selectedTab === 0 ? "Archive All Calls" : "Unarchive All Calls";
  const icon = state.selectedTab === 0 ? "archive-icon" : "unarchive-icon";

  const archiveOrUnarchiveAll = () => {
    if (state.selectedTab === 0) {
      ARCHIVE_ALL_ACTIVITIES(state.activities, dispatch);
    } else {
      RESET_ALL_ACTIVITIES(dispatch);
    }
  };

  return (
    <div className="archive-button" onClick={archiveOrUnarchiveAll}>
      <img src={`../public/icons/${icon}.svg`} />
      <span>{buttonText}</span>
    </div>
  );
}
