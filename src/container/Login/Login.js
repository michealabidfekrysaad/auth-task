import React, { useEffect } from "react";
import Input from "../../component/Input/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Btn from "../../component/Btn/Btn";
import { useHistory } from "react-router-dom";
import { LoginRequest } from "../../store/actions/Users";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../component/Loader/Loader";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token && history.push("/");
  }, [token, history]);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Must be valid E-mail").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    dispatch(LoginRequest(values));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return !loading ? (
    <div className="container">
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <Input
            type="email"
            className={
              !(formik.errors.email && formik.touched.email)
                ? "form-control"
                : "form-control border border-danger"
            }
            id="email"
            placeHolder="enter email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <small className="form-text text-muted">
            {formik.errors.email && formik.touched.email ? (
              <div className="text-danger">{formik.errors.email}</div>
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
              !(formik.errors.password && formik.touched.password)
                ? "form-control"
                : "form-control border border-danger"
            }
            id="password"
            name="password"
            placeHolder="enter password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <small className="form-text text-muted">
            {formik.errors.password && formik.touched.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : (
              <span>Enter you register password</span>
            )}
          </small>
        </div>
        <Btn
          type="submit"
          content="Submit"
          isDisabled={!(formik.isValid && formik.dirty)}
          className={
            !(formik.isValid && formik.dirty)
              ? "btn btn-secondary"
              : "btn btn-primary"
          }
        />
      </form>
    </div>
  ) : (
    <Loader />
  );
};

export default Login;
