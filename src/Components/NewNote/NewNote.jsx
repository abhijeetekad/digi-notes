import React, { useState } from "react";
import "./NewNote.css";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useNote } from "../../Contexts/Note-context";
import { useAuth } from "../../Contexts/Auth-context";
import { addNoteService } from "../../Services/NotesServices/addNoteServices";

function NewNote() {
  const { noteState, dispatchNote, setNoteList } = useNote();
  const { auth } = useAuth();

  const [isExtended, setExtended] = useState(false);
  const [tempNote, setTeampNote] = useState(noteState);

  const [showPalette, setShowPallete] = useState(false);
  const paletteModel = () => {
    setShowPallete(!showPalette);
  };
  const addNoteHandler = async (authToken) => {
    const notes = await addNoteService(authToken, {
      ...noteState,
      createdAt: new Date(),
    });
    setNoteList(notes);
    dispatchNote({ type: "CLEAR_FIELDS" });
    setTeampNote("");
  };
  const updateColor = (color) => {
    dispatchNote({ type: "NOTE_COLOR", payload: color });
  };

  return (
    <div>
      <div className="formContainer">
        <div className="form-catageory">
          <input
            className="input-title"
            onClick={() => setExtended(true)}
            name="title"
            placeholder="Title"
            value={noteState.title}
            onChange={(e) =>
              dispatchNote({ type: "NOTE_TITLE", payload: e.target.value })
            }
          />
        </div>

        {isExtended && (
          <div className="form-catageory">
            <input
              name="description"
              className="form-input"
              placeholder="Take a Note"
              value={noteState.descreption}
              onChange={(e) =>
                dispatchNote({
                  type: "NOTE_DESCREPTION",
                  payload: e.target.value,
                })
              }
            />
          </div>
        )}

        {isExtended && (
          <div className="form-btn">
            <button className="formBtn" onClick={() => setExtended(false)}>
              Close
            </button>
            <button
              className="formBtn"
              onClick={() => {
                addNoteHandler(auth.authToken);
              }}
            >
              Add Note
            </button>
          </div>
        )}

        {isExtended && (
          <div className="form-label">
            <select
              onChange={(e) => {
                dispatchNote({
                  type: "SELECTED_NOTE",
                  payload: e.target.value,
                });
              }}
              required
              className="form-details"
            >
              {noteState.label.map((item) => (
                <option required value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => {
                dispatchNote({
                  type: "SELECTED_PRIORITY",
                  payload: e.target.value,
                });
              }}
              required
              className="form-details"
            >
              {noteState.priority.map((item) => (
                <option required value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* <input
              className="form-details"
              type="text"
              value
              placeholder="Create new label"
            /> */}

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
        )}
      </div>
    </div>
  );
}

export { NewNote };
