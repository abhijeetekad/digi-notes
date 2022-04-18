import React from "react";
import { useNote } from "../../Contexts/Note-context";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { useAuth } from "../../Contexts/Auth-context";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";

function Trash() {
  const { auth } = useAuth();
  const { noteList } = useNote();

  const { updateNoteHandler, deleteNoteHandler } = useNote();
  return (
    <div>
      Trash
      <div className="all-notes">
        {noteList.map((item) => {
          return (
            <div>
              {item.trashNotes && (
                <div
                  style={{ backgroundColor: `${item.noteColor}` }}
                  className="note-card"
                >
                  <span
                    onClick={() => deleteNoteHandler(item._id, auth.authToken)}
                    className="delete-icon"
                  >
                    <DeleteIcon />
                  </span>
                  <div className="card-labels">
                    <div className="priority">{item.selectedPriority}</div>
                    <div className="category">{item.selectedLabel}</div>
                  </div>
                  <h4 className="note-title"> {item.title}</h4>
                  <p className="note-descreption">{item.descreption}</p>

                  <div className="note-footer">
                    {moment(item.createdAt).format("DD/MM/YYYY, h:mm a")}

                    <span
                      onClick={() =>
                        updateNoteHandler(
                          item._id,
                          { ...item, trashNotes: false },
                          auth.authToken
                        )
                      }
                      className="delete-icon"
                    >
                      <RestoreFromTrashIcon />
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Trash };
