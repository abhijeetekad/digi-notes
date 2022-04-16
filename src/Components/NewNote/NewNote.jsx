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

  // const [showPalette, setShowPallete] = useState(false);
  // const paletteModel = () => {
  //   setShowPallete(!showPalette);
  // };
  const addNoteHandler = async (authToken) => {
    const notes = await addNoteService(authToken, {
      ...noteState,
    });
    setNoteList(notes);
    dispatchNote({ type: "CLEAR_FIELDS" });
    setTeampNote("");
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
            {/* <select required className="form-details">
              {priority.map((item) => (
                <option required value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select required className="form-details">
              {newArrLabel.map((item) => (
                <option required value={item}>
                  {item}
                </option>
              ))}
            </select> */}

            {/* <input
              className="form-details"
              type="text"
              value
              placeholder="Create new label"
            /> */}

            <div className="ColorLensIcon">
              <span style={{ color: "black" }} onClick>
                <ColorLensIcon />
              </span>
              {/* <div className="palette">
                {showPalette && (
                  <div className="colorPalette">
                    <button
                      onClick
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ecdbff" }}
                    ></button>
                    <button
                      onClick
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#dcffe3" }}
                    ></button>
                    <button
                      onClick
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#d9f2ff" }}
                    ></button>
                    <button
                      onClick
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ffffd8" }}
                    ></button>
                    <button
                      onClick
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ffd9fa" }}
                    ></button>
                    <button
                      onClick
                      className="colorPaletteBtn"
                      style={{ backgroundColor: "#ffffff" }}
                    ></button>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { NewNote };
