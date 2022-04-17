import React, { useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

import "./Note.css";
import { useNote } from "../../Contexts/Note-context";
import { useAuth } from "../../Contexts/Auth-context";

function Note({ note }) {
  const { auth } = useAuth();
  const { title, descreption, notePinned, _id, tags } = note;
  const { updateNoteHandler, archiveNoteHandler } = useNote();
  const { updatedNote, setUpdatedNote } = useState(note);
  return (
    <div>
      <div className="note-card">
        <span className="delete-icon">
          <div
            style={{ color: notePinned ? "black" : "white" }}
            onClick={() => {
              updateNoteHandler(
                _id,
                { ...updatedNote, notePinned: !notePinned },
                auth.authToken
              );
            }}
          >
            <PushPinIcon />
          </div>
        </span>
        {/* <div className="card-labels">
          <div className="priority">{item.selectedPriority}</div>
          <div className="category">{item.selectedCategory}</div>
        </div> */}

        <h4 className="note-title"> {note.title}</h4>
        <p className="note-descreption">{note.descreption}</p>

        <div className="note-footer">
          {/* <p>Date: {item.date}</p> */}
          <span
            // onClick={() =>
            //   dispatchNoteData({
            //     type: "MOVE_TO_RECYCLE_BIN",
            //     payload: item,
            //   })
            // }
            className="delete-icon"
          >
            <DeleteIcon />
          </span>

          <span
            onClick={() => archiveNoteHandler(_id, updatedNote, auth.authToken)}
            className="archive-icon"
          >
            <ArchiveIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export { Note };
