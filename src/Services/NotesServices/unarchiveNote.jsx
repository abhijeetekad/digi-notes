import axios from "axios";
const unarchiveNote = async (id, authToken) => {
  try {
    const { data } = await axios.post(
      `/api/archives/restore/${id}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { unarchiveNote };
