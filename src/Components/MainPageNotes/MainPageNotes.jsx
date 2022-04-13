import React from "react";
import { useSidebar } from "../../Contexts/Sidebar-context";
import { AllNotes } from "../AllNotes/AllNotes";
import { NewNote } from "../NewNote/NewNote";
import { PinnedNotes } from "../PinnedNotes/PinnedNotes";

function MainPageNotes() {
  const { sidebarLeft, sidebarRight } = useSidebar();
  return (
    <div>
      <NewNote />
      <PinnedNotes />
      <AllNotes />
    </div>
  );
}

export { MainPageNotes };
