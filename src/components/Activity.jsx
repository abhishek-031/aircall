import React from "react";
import { callIconToUse } from "../utility/utils";
import { useAppContext } from "../hooks/useAppContext";
import { UPDATE_ACTIVITY } from "../utility/ApiCalls";

export default function Activity({ activity }) {
  const { state, dispatch } = useAppContext();
  const [isDotsExpanded, setIsDotsExpanded] = React.useState(false);

  if (state.selectedTab === 0 && activity.is_archived) return null;
  if (state.selectedTab === 1 && !activity.is_archived) return null;

  const expandDots = () => {
    setIsDotsExpanded((current) => !current);
    document.addEventListener(
      "click",
      (e) => {
        const archiveButton = document.querySelector("#archive-button");
        if (e.target == archiveButton) {
          if (state.selectedTab === 0) {
            UPDATE_ACTIVITY(activity.id, true, dispatch);
          } else {
            UPDATE_ACTIVITY(activity.id, false, dispatch);
          }
          setIsDotsExpanded(false);
        } else if (!e.target.classList.contains("three-dots")) {
          setIsDotsExpanded(false);
        }
      },
      { once: true }
    );
  };

  const buttonText = state.selectedTab === 0 ? "Archive" : "Un Archive";

  return (
    <div className="activity">
      <img src={`/public/icons/${callIconToUse(activity)}.svg`} />
      <p>{activity.via || "9394883"}</p>
      {isDotsExpanded && <button id="archive-button">{buttonText}</button>}
      <img
        onClick={expandDots}
        className="three-dots"
        src="/public/icons/three-dots.svg"
      />
    </div>
  );
}
