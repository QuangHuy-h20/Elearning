import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
      console.log(values);
    return axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
  },
  resister: (values) => {
    return axiosClient.post("/QuanLyNguoiDung/DangKy", values);
  },
};

export default authAPI;
