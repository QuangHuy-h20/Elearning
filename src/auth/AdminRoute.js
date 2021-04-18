import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute({ children, ...props }) {
  const { userInfo } = useSelector((state) => state.auth);

  //Chưa đăng nhập
  if (!userInfo) {
    return <Redirect to={`/login?redirectTo=${props.path}`} />;
  }
  //Đã đăng nhập nhưng ko phải là GV
  if (userInfo.maLoaiNguoiDung !== "GV") {
    return <Redirect to="/" />;
  }

  return <Route {...props}>{children}</Route>;
}
