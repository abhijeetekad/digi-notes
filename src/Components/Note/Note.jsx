import React, { useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import moment from "moment";
import "./Note.css";
import { useNote } from "../../Contexts/Note-context";
import { useAuth } from "../../Contexts/Auth-context";
import ColorLensIcon from "@mui/icons-material/ColorLens";

function Note({ note }) {
  const { auth } = useAuth();
  const {
    title,
    descreption,
    notePinned,
    _id,
    tags,
    createdAt,
    selectedLabel,
    selectedPriority,
    noteColor,
  } = note;
  console.log("noteColor", noteColor);
  const { updateNoteHandler, archiveNoteHandler, dispatchNote } = useNote();
  const { updatedNote, setUpdatedNote } = useState(note);

  const [showPalette, setShowPallete] = useState(false);
  const paletteModel = () => {
    setShowPallete(!showPalette);
  };
  const updateColor = (color) => {
    dispatchNote({ type: "NOTE_COLOR", payload: color });
  };
  return (
    <div>
      <div style={{ backgroundColor: `${noteColor}` }} className="note-card">
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
        <div className="card-labels">
          <div className="priority">{selectedPriority}</div>
          <div className="category">{selectedLabel}</div>
        </div>

        <h4 className="note-title"> {note.title}</h4>
        <p className="note-descreption">{note.descreption}</p>

        <div className="note-footer">
          {moment(createdAt).format("DD/MM/YYYY, h:mm a")}

          <span
            onClick={() =>
              updateNoteHandler(
                _id,
                { ...updateNoteHandler, trashNotes: true },
                auth.authToken
              )
            }
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
          <div className="ColorLensIcon">
            <span
              style={{ color: "black" }}
              onClick={() => paletteModel((showPalette) => !showPalette)}
            >
              <ColorLensIcon />
            </span>
            <div className="palette">
              {showPalette && (
                <div className="colorPalette">
                  <button
                    onClick={() => updateColor("red")}
                    style={{ backgroundColor: "red" }}
                    className="colorPaletteBtn"
                  ></button>
                  <button
                    onClick={() => updateColor("violet")}
                    style={{ backgroundColor: "violet" }}
                    className="colorPaletteBtn"
                  ></button>
                  <button
                    onClick={() => updateColor("yellow")}
                    style={{ backgroundColor: "yellow" }}
                    className="colorPaletteBtn"
                  ></button>
                  <button
                    onClick={() => updateColor("blue")}
                    style={{ backgroundColor: "blue" }}
                    className="colorPaletteBtn"
                  ></button>
                  <button
                    onClick={() => updateColor("orange")}
                    style={{ backgroundColor: "orange" }}
                    className="colorPaletteBtn"
                  ></button>
                  <button
                    onClick={() => updateColor("green")}
                    style={{ backgroundColor: "green" }}
                    className="colorPaletteBtn"
                  ></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Note };
