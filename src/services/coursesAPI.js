import axiosClient from "./axiosClient";

const coursesAPI = {
  getCourses: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },
};

export default coursesAPI;

//Cách use

// import coursesAPI from "src/services/coursesAPI";

// const { data } = await coursesAPI.getCourses();
