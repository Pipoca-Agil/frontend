import axios from "axios";
import { apiUrl } from "../assets/utils";
import {
  type RequestApiBody,
  type ResponseApiOk,
  type ResponseApiError,
} from "../interfaces/registerInterfaces";

export const postRegister = async (formData: RequestApiBody) => {
  try {
    const response = await axios.post(`${apiUrl}/user`, formData);

    return response.data;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
