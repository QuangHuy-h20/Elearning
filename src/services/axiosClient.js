import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
});

export default axiosClient;
