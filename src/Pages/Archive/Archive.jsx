import React from "react";
import { useNote } from "../../Contexts/Note-context";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useAuth } from "../../Contexts/Auth-context";
import moment from "moment";

function Archive() {
  const { auth } = useAuth();
  const { archiveList, unarchiveNoteHandler } = useNote();
  console.log(archiveList);

  return (
    <div>
      Archive
      <div className="all-notes">
        {archiveList.map((item) => {
          return (
            <div>
              <div
                style={{ backgroundColor: `${item.noteColor}` }}
                className="note-card"
              >
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
                      unarchiveNoteHandler(item._id, auth.authToken)
                    }
                    className="archive-icon"
                  >
                    <UnarchiveIcon />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Archive };
