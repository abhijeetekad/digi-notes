import axios from "axios";
const deleteNoteServices = async (id, authToken) => {
  try {
    const { data } = await axios.delete(`/api/notes/${id}`, {
      headers: {
        authorization: authToken,
      },
    });
    return data.notes;
  } catch (error) {
    console.error(error);
  }
};
export { deleteNoteServices };
