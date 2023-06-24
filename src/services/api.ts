import axios from "axios";

interface INewUser {
  name: string;
  surname: string;
  email: string;
  password: string;
}
const api = axios.create({
  baseURL: "https://backend-production-a1f0.up.railway.app/"
});

export const createUser = async (user: INewUser): Promise<INewUser> => {
  const response = await api.post<INewUser>("user", user);
  const createdUser = await response.data;

  return createdUser;
};
