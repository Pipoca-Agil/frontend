import axios from "axios";
import { apiUrl } from "../assets/utils";
import { LoginInterface } from "../interfaces/loginInterfaces";

export const postLogin = async (loginData: LoginInterface) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      email: loginData.email,
      password: loginData.password,
    });

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Re-throw the error to be caught by the calling code
  }
};
