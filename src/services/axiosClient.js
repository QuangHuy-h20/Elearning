import axios from "axios";
import qs from "qs";

const axiosClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  // Tự cấu hình cách lấy params mặc định của axios
  //Bỏ qua giá trị null và undefined trong params
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});

export default axiosClient;
