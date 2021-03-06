import axios from "axios";

const updateNoteServices = async (id, note, authToken) => {
  try {
    const { data } = await axios.post(
      `/api/notes/${id}`,
      { note },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data.notes;
  } catch (error) {
    console.log(error);
  }
};

export { updateNoteServices };
