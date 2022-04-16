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
};

const NoteProvider = ({ children }) => {
  const [noteState, dispatchNote] = useReducer(NoteReducer, initialValues);
  const [noteList, setNoteList] = useState([]);

  const updateNoteHandler = async (id, note, authToken) => {
    const response = await updateNoteServices(id, note, authToken);
    setNoteList(response);
  };
  console.log(noteList);
  return (
    <NoteContext.Provider
      value={{
        noteState,
        dispatchNote,
        noteList,
        setNoteList,
        updateNoteHandler,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { NoteProvider, useNote };
