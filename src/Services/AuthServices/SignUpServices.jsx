import axios from "axios";

const signUpHandler = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export { signUpHandler };
