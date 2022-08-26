import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "../api/Axios";
import { RandomUser } from "../model/RandomUser";
const UserService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getRandomUser: async () => {
    try {
      const response = await api.get("/");
      console.log("data is", response.data.results[0]);
      return response.data.results[0];
    } catch (error) {
      console.error(error);
    }
  },
});

export default UserService;
