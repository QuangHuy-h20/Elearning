import axiosClient from "./axiosClient";

const coursesAPI = {
  getCourses: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },
  getCoursesByCategory: (category) => {
    const params = {
      maDanhMuc: category,
    };
    // return axiosClient.get(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}`);
    return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      category,
    });
  },
};

export default coursesAPI;

//Cách use

// import coursesAPI from "src/services/coursesAPI";

// const { data } = await coursesAPI.getCourses();
