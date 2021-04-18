import axios from "axios";
import qs from "qs";

const axiosClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  // Tự cấu hình cách lấy params mặc định của axios
  //Bỏ qua giá trị null và undefined trong params
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});

axiosClient.interceptors.request.use(
  (config) => {
    //Xử lý trước khi request đc gửi lên server
    //Thêm authorization vào header
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const { accessToken } = JSON.parse(userInfo);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    //Xử lý khi request bị lỗi
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    //Xử lý kq trả về từ server
    return response;
  },
  (error) => {
    //Xử lý nếu kết quả trả về bị lỗi
    if (error.status === 401) {
      //Xử lý logout: clear localStorage, đẩy ng dùng về trang loginS
    }

    if (error.status === 500) {
      //Xử lý thông báo cho ng dùng server đang bị lỗi
    }
  }
);

export default axiosClient;
