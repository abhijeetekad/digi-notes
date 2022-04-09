import React from "react";
import { AllNotes } from "../AllNotes/AllNotes";
import { NewNote } from "../NewNote/NewNote";
import { PinnedNotes } from "../PinnedNotes/PinnedNotes";

function MainPageNotes() {
  return (
    <div>
      <NewNote />
      <PinnedNotes />
      <AllNotes />
    </div>
  );
}

export { MainPageNotes };
