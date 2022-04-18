import { addNoteToArchive } from "../Services/NotesServices/addNoteToArchive";
import { deleteNoteServices } from "../Services/NotesServices/deleteNote";
import { unarchiveNote } from "../Services/NotesServices/unarchiveNote";

import { updateNoteServices } from "../Services/NotesServices/updateNoteServices";

const { createContext, useContext, useReducer, useState } = require("react");
const NoteContext = createContext();

const NoteReducer = (state, action) => {
  switch (action.type) {
    case "NOTE_TITLE":
      return { ...state, title: action.payload };
    case "NOTE_DESCREPTION":
      return { ...state, descreption: action.payload };
    case "CLEAR_FIELDS":
      return { ...state, title: "", descreption: "" };
  }
};
const initialValues = {
  title: "",
  descreption: "",
  notePinned: false,
  trashNotes: false,
  label: ["work", "home", "school"],
  priority: ["High", "medium", "low"],
};

const NoteProvider = ({ children }) => {
  const [noteState, dispatchNote] = useReducer(NoteReducer, initialValues);
  const [noteList, setNoteList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);

  const updateNoteHandler = async (id, note, authToken) => {
    const response = await updateNoteServices(id, note, authToken);
    setNoteList(response);
  };
  const archiveNoteHandler = async (id, note, authToken) => {
    const response = await addNoteToArchive(id, note, authToken);
    setArchiveList(response.archives);
    setNoteList(response.notes);
  };
  const unarchiveNoteHandler = async (id, note, authToken) => {
    const response = await unarchiveNote(id, note, authToken);
    setArchiveList(response.archives);
    setNoteList(response.notes);
  };
  const deleteNoteHandler = async (id, authToken) => {
    const response = await deleteNoteServices(id, authToken);
    setNoteList(response);
  };
  console.log(noteState);
  return (
    <NoteContext.Provider
      value={{
        noteState,
        dispatchNote,
        noteList,
        setNoteList,
        updateNoteHandler,
        archiveNoteHandler,
        archiveList,
        unarchiveNoteHandler,
        deleteNoteHandler,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { NoteProvider, useNote };
