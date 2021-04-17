import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, FormGroup, Label, Alert } from "reactstrap";

//Controlled Component: control tất cả mọi thứ trên giao diện bằng state, props
//Uncontrolled Component: control giao diện ko thông qua state, props

//Cả useState và useRef đều dùng để lưu trữ data
//Khác: khi state thay đổi, component bị render lại, ref thay đổi component bị render lại
export default function LoginPage() {
  //   const inpUsername = useRef();
  //   const inpPassword = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },

    //Sử dụng khi UI Component ko hỗ trợ register
    control,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="container w-50">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            {...register("username", {
              required: { value: true, message: "Username is not empty" },
              minLength: {
                value: 5,
                message: "Username must have 5 to 20 characters",
              },
              maxLength: {
                value: 20,
                message: "Username must have 5 to 20 characters",
              },
            })}
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username.message}</div>
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
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
        </FormGroup>
        <button className="btn btn-success" handleSubmit>
          Login
        </button>
      </form>
    </div>
  );
}
