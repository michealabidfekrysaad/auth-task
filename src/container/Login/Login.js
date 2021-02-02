import React, { useEffect } from "react";
import Input from "../../component/Input/Input";
import Btn from "../../component/Btn/Btn";
import { useHistory } from "react-router-dom";
import { LoginRequest } from "../../store/actions/Users";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../component/Loader/Loader";

import { useForm } from "react-hook-form";

const Login = () => {
  const INITIAL_VALUES = {
    email: "mahmoud.mostafa@ibtikar.net.sa",
    password: "test1234",
  };
  const { register, handleSubmit, errors, reset, formState } = useForm({
    defaultValues: INITIAL_VALUES,
    mode: "onChange",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);
  let UserLoginSuccess = useSelector((state) => state.UsersReducer.statusText);

  useEffect(() => {
    UserLoginSuccess === "OK" && history.push("/");
  }, [UserLoginSuccess, history])

  const onSubmit = (values) => {
    reset({ INITIAL_VALUES });
    dispatch(LoginRequest({ values }));
  };

  return !loading ? (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            register={register({ required: "Email is required" })}
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
            register={register({ required: "Password is required" })}
          />
          <small className="form-text text-muted">
            {errors.password ? (
              <div className="text-danger">{errors.password.message}</div>
            ) : (
              <span>Enter you register password</span>
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

export default Login;
