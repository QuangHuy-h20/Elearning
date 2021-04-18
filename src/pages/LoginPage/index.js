import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, FormGroup, Label, Alert } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "src/actions/auth";
import { Redirect, useLocation } from "react-router";
import qs from "qs";
//Controlled Component: control tất cả mọi thứ trên giao diện bằng state, props
//Uncontrolled Component: control giao diện ko thông qua state, props

//Cả useState và useRef đều dùng để lưu trữ data
//Khác: khi state thay đổi, component bị render lại, ref thay đổi component bị render lại

//Tạo schema validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Username is not empty")
    .min(5, "Username must have 5 to 20 characters")
    .max(20, "Username must have 5 to 20 characters"),
  matKhau: yup
    .string()
    .required("Password is not empty")
    .min(5, "Password must have 5 to 20 characters")
    .max(20, "Password must have 5 to 20 characters"),
});

export default function LoginPage() {
  //   const inpUsername = useRef();
  //   const inpPassword = useRef();

  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },

    //Sử dụng khi UI Component ko hỗ trợ register
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleLogin = (data) => {
    // console.log(inpUsername.current.values)
    console.log(data);

    //dispatch action login
    dispatch(login(data));
  };

  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return <Redirect to="/" />;
  }

  return (
    <div className="container w-50">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-group">
          <Label>Username</Label>
          <input
            type="text"
            className="form-control"
            {...register(
              "taiKhoan"
              //Sử dụng yup thì ko cần đoạn dưới nữa
              // {
              //   required: { value: true, message: "Username is not empty" },
              //   minLength: {
              //     value: 5,
              //     message: "Username must have 5 to 20 characters",
              //   },
              //   maxLength: {
              //     value: 20,
              //     message: "Username must have 5 to 20 characters",
              //   },
              // }
            )}
          />
          {errors.taiKhoan && (
            <div className="alert alert-danger">{errors.taiKhoan.message}</div>
          )}
        </div>
        {/* <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
                required: { value: true, message: "Password is not empty" },
                minLength: {
                  value: 5,
                  message: "Password must have 5 to 20 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must have 5 to 20 characters",
                },
              })}
          />
          {errors.password && (
            <div className="alert alert-danger">{errors.password.message}</div>
          )}
        </div> */}
        {/* <FormGroup>
          <Label>Password</Label>
          <Input
            type="text"
            {...register("password", {
              required: { value: true, message: "Password is not empty" },
              minLength: {
                value: 5,
                message: "Password must have 5 to 20 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must have 5 to 20 characters",
              },
            })}
          />
          {errors.password && (
            <Alert color="danger">{errors.password.message}</Alert>
          )}
        </FormGroup> */}
        <FormGroup>
          <Label>Password</Label>
          <Controller
            name="matKhau"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Password is not empty" },
              minLength: {
                value: 5,
                message: "Password must have 5 to 20 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must have 5 to 20 characters",
              },
            }}
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
          {errors.matKhau && (
            <Alert color="danger">{errors.matKhau.message}</Alert>
          )}
        </FormGroup>

        {error && <Alert color="danger">{error}</Alert>}
        <button className="btn btn-success" handleSubmit>
          Login
        </button>
      </form>
    </div>
  );
}
