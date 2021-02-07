import React, { useEffect, useRef } from "react";
import Input from "../../component/Input/Input";

import Btn from "../../component/Btn/Btn";
import { RegisterRequest } from "../../store/actions/Users";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import Loader from "../../component/Loader/Loader";
import { useForm } from "react-hook-form";

const Register = () => {
  const initialValues = {
    photo: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile_number: "",
  };

  let userCreated = useSelector((state) => state.UsersReducer.statusText);
  const { register, handleSubmit, errors, reset, formState, watch } = useForm({
    defaultValues: initialValues,
    mode: "onChange",
  });
  const password = useRef({});
  password.current = watch("password", "");

  const loading = useSelector((state) => state.loader);

  const history = useHistory();
  useEffect(() => {
    userCreated === "Created" && history.push("/login");
  }, [userCreated, history]);

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    let mobile_number = `+2${values.mobile_number}`;
    values = { ...values, mobile_number };
    console.log(values.photo[0]);
    dispatch(RegisterRequest({ values }));
    reset({ initialValues });
  };

  return !loading ? (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="photo">Upload Image</label>
          <Input
            type="file"
            className={
              !errors.photo
                ? "form-control"
                : "form-control border border-danger"
            }
            id="photo"
            name="photo"
            register={register({
              required: "Image is required",
              validate: (value) =>
                value[0].type.slice(-4) === "/png" ||
                value[0].type.slice(-4) === "/jpg" ||
                value[0].type.slice(-4) === "jpeg" ||
                "Image is not valid",
            })}
          />
          <small className="form-text text-muted">
            {errors.photo ? (
              <div className="text-danger">{errors.photo.message}</div>
            ) : (
              <span>Image is required</span>
            )}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <Input
            type="text"
            className={
              !errors.name
                ? "form-control"
                : "form-control border border-danger"
            }
            id="name"
            placeHolder="enter Username"
            name="name"
            register={register({
              required: "UserName is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "User name must be string",
              },
            })}
          />
          <small className="form-text text-muted">
            {errors.name ? (
              <div className="text-danger">{errors.name.message}</div>
            ) : (
              <span>Username is required</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <Input
            type="email"
            className={
              !errors.email
                ? "form-control"
                : "form-control border border-danger"
            }
            id="email"
            placeHolder="enter email"
            name="email"
            register={register({
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Email is not valid",
              },
            })}
          />
          <small className="form-text text-muted">
            {errors.email ? (
              <div className="text-danger">{errors.email.message}</div>
            ) : (
              <span>It must be valid email address</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className={
              !errors.password
                ? "form-control"
                : "form-control border border-danger"
            }
            id="password"
            name="password"
            placeHolder="enter password"
            register={register({
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <small className="form-text text-muted">
            {errors.password ? (
              <div className="text-danger">{errors.password.message}</div>
            ) : (
              <span>Recommended strong password</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation">Confirm you password</label>
          <Input
            type="password"
            className={
              !errors.password_confirmation
                ? "form-control"
                : "form-control border border-danger"
            }
            id="password_confirmation"
            name="password_confirmation"
            placeHolder="confirm your password"
            register={register({
              required: "Confirm password is required",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          <small className="form-text text-muted">
            {errors.password_confirmation ? (
              <div className="text-danger">
                {errors.password_confirmation.message}
              </div>
            ) : (
              <span>the same as your password above</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="mobile_number">Phone number</label>
          <Input
            type="number"
            className={
              !errors.mobile_number
                ? "form-control"
                : "form-control border border-danger"
            }
            id="mobile_number"
            name="mobile_number"
            placeHolder="enter phone number"
            register={register({
              required: "Phone number is required",
              validate: (value) =>
                value.length === 11 ||
                `${
                  value.length <= 11
                    ? `Remain ${11 - value.length} number to be valid`
                    : `Remove ${value.length - 11} number to be valid`
                }`,
            })}
          />
          <small className="form-text text-muted">
            {errors.mobile_number ? (
              <div className="text-danger">{errors.mobile_number.message}</div>
            ) : (
              <span>Must be valid number</span>
            )}
          </small>
        </div>
        <Btn
          type="submit"
          content="Submit"
          isDisabled={!formState.isValid}
          className={
            !formState.isValid ? "btn btn-secondary" : "btn btn-primary"
          }
        />
      </form>
    </div>
  ) : (
    <Loader />
  );
};

export default Register;
