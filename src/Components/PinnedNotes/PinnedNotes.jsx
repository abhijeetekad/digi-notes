import React from "react";
import { useNote } from "../../Contexts/Note-context";
import { Note } from "../Note/Note";

function PinnedNotes() {
  const { noteList } = useNote();
  return (
    <div>
      PinnedNotes
      <div className="all-notes">
        {noteList.map((item) => {
          return <div>{item.notePinned && <Note note={item} />}</div>;
        })}
      </div>
    </div>
  );
}

export { PinnedNotes };
