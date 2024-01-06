import React from "react";
import ArchiveAllButton from "./ArchiveAllButton.jsx";
import { Activities } from "./Activities.jsx";

export default function MainContent() {
  return (
    <div id="main-content">
      <ArchiveAllButton />
      <Activities />
    </div>
  );
}
