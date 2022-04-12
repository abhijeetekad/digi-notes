import axios from "axios";
const signInHandler = async ({ email, password }) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export { signInHandler };
