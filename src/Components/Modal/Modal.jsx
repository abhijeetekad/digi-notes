import React, { useState } from "react";
import { useAuth } from "../../Contexts/Auth-context";
import { useNote } from "../../Contexts/Note-context";
import "./Modal.css";
// import moment from "moment";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const Modal = ({
  currentNote,
  setIsModal,
  isModal,
  updatedNote,
  setUpdatedNote,
}) => {
  const { updateNoteHandler } = useNote();
  const {
    auth: { authToken },
  } = useAuth();

  const [showPalette, setShowPallete] = useState(false);
  const paletteModel = () => {
    setShowPallete(!showPalette);
  };
  const updateColor = (color) => {
    dispatchNote({ type: "NOTE_COLOR", payload: color });
  };
  const { _id } = currentNote;
  console.log(updatedNote);
  return (
    <div>
      <div className="update-note-container">
        <div className="modal-section">
          <div className="form-catageory2">
            <input
              className="form-input2"
              name="title"
              placeholder="Title"
              value={updatedNote.title}
              onChange={(e) =>
                setUpdatedNote({ ...updatedNote, title: e.target.value })
              }
            />

            <input
              name="description"
              className="form-input2"
              placeholder="Take a Note"
              value={updatedNote.descreption}
              onChange={(e) =>
                setUpdatedNote({
                  ...updatedNote,
                  descreption: e.target.value,
                })
              }
            />
          </div>

          <div className="form-catageory2">
            <button className="formBtn2" onClick={() => setIsModal(false)}>
              Close
            </button>
            <button
              className="formBtn2"
              onClick={() => {
                updateNoteHandler(_id, { ...updatedNote }, authToken);
                setIsModal(false);
              }}
            >
              Update Note
            </button>
          </div>

          <div className="form-catageory2">
            {/* <select
              onChange={(e) =>
                setUpdatedNote({
                  ...updatedNote,
                  label: e.target.value,
                })
              }
              className="form-details2"
            >
              {updatedNote.label.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <select
              onChange={(e) =>
                setUpdatedNote({
                  ...updatedNote,
                  priority: e.target.value,
                })
              }
              className="form-details2"
            >
              {updatedNote.priority.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select> */}
            <div className="note-footer2">
              {/* {moment(createdAt).format("DD/MM/YYYY, h:mm a")} */}
              {/* <span onClick={() => setIsModal((modal) => !modal)}>
                <EditIcon />
              </span> */}
              <span
                onClick={() => {
                  setUpdatedNote({
                    ...updatedNote,
                    notePinned: !updatedNote.notePinned,
                  });
                }}
                className="delete-icon2"
              >
                <PushPinIcon />
              </span>

              <span
                // onClick={() => {
                //   setUpdatedNote({
                //     ...updatedNote,
                //     notePinned: !updatedNote.notePinned,
                //   });
                // }}
                className="archive-icon2"
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
                        onClick={() => {
                          setUpdatedNote({
                            noteColor: "#B4FF9F",
                          });
                        }}
                        // onClick={() => updateColor("red")}
                        style={{ backgroundColor: "#B4FF9F" }}
                        className="colorPaletteBtn"
                      ></button>
                      <button
                        onClick={() => {
                          setUpdatedNote({
                            ...updatedNote,
                            noteColor: "#F9FFA4",
                          });
                        }}
                        // onClick={() => updateColor("violet")}
                        style={{ backgroundColor: "#F9FFA4" }}
                        className="colorPaletteBtn"
                      ></button>
                      <button
                        onClick={() => {
                          setUpdatedNote({
                            ...updatedNote,
                            noteColor: "#A1E3D8",
                          });
                        }}
                        style={{ backgroundColor: "#A1E3D8" }}
                        className="colorPaletteBtn"
                      ></button>
                      <button
                        onClick={() => {
                          setUpdatedNote({
                            ...updatedNote,
                            noteColor: "#FAF5E4",
                          });
                        }}
                        style={{ backgroundColor: "#FAF5E4" }}
                        className="colorPaletteBtn"
                      ></button>
                      <button
                        onClick={() => {
                          setUpdatedNote({
                            ...updatedNote,
                            noteColor: "#D7A86E",
                          });
                        }}
                        style={{ backgroundColor: "#D7A86E" }}
                        className="colorPaletteBtn"
                      ></button>
                      <button
                        onClick={() => {
                          setUpdatedNote({
                            ...updatedNote,
                            noteColor: "#EEEEEE",
                          });
                        }}
                        style={{ backgroundColor: "#EEEEEE" }}
                        className="colorPaletteBtn"
                      ></button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
