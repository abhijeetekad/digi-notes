import axios from "axios";

const addNoteService = async (authToken, note) => {
  try {
    const { data } = await axios.post(
      "/api/notes",
      { note },
      { headers: { authorization: authToken } }
    );
    return data.notes;
  } catch (error) {
    console.error(error);
  }
};
export { addNoteService };
