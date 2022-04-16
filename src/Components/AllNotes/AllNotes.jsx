import React from "react";
import { useNote } from "../../Contexts/Note-context";
import "./AllNotes.css";
import { Note } from "../Note/Note";
function AllNotes() {
  const { noteList } = useNote();

  return (
    <div>
      {" "}
      <div>all notes</div>
      <div className="all-notes">
        {noteList.map((item) => {
          return <div>{!item.notePinned && <Note note={item} />}</div>;
        })}
      </div>
    </div>
  );
}

export { AllNotes };
