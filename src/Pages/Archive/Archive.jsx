import React from "react";
import { useNote } from "../../Contexts/Note-context";
import DeleteIcon from "@mui/icons-material/Delete";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useAuth } from "../../Contexts/Auth-context";

function Archive() {
  const { auth } = useAuth();
  const { archiveList, unarchiveNoteHandler } = useNote();
  console.log(archiveList);

  return (
    <div>
      Archive
      <div className="all-notes">
        {archiveList.map((item) => {
          console.log("2", item);
          return (
            <div>
              <div className="note-card">
                <h4 className="note-title"> {item.title}</h4>
                <p className="note-descreption">{item.descreption}</p>

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
                  {
                    <>
                      <span
                        onClick={() =>
                          unarchiveNoteHandler(item._id, auth.authToken)
                        }
                        className="archive-icon"
                      >
                        <UnarchiveIcon />
                      </span>
                    </>
                  }
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
