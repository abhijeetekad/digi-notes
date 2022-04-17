import React from "react";
import { useNote } from "../../Contexts/Note-context";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { useAuth } from "../../Contexts/Auth-context";

function Trash() {
  const { auth } = useAuth();
  const { noteList } = useNote();

  const { updateNoteHandler } = useNote();
  return (
    <div>
      Trash
      <div className="all-notes">
        {noteList.map((item) => {
          return (
            <div>
              {item.trashNotes && (
                <div className="note-card">
                  <h4 className="note-title"> {item.title}</h4>
                  <p className="note-descreption">{item.descreption}</p>

                  <div className="note-footer">
                    {/* <p>Date: {item.date}</p> */}
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
