import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByCategory } from "../../actions/courses";

export default function Courses() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { courses, isLoading, error } = useSelector((state) => state.courses);

  console.log(courses);

  //Đc chạy mỗi khi params cate thay đổi, để gọi lại API mới tương ứng với cate mới
  
  useEffect(() => {
    //dispatch action call API get list
    dispatch(getCoursesByCategory(category));
  }, [category]);

  return (
    <div>
      <h1>Courses List By Categories</h1>
    </div>
  );
}
