import React, { useEffect } from "react";
import Input from "../component/Input/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Btn from "../component/Btn/Btn";
import { RegisterRequest } from "../store/actions/Auth";
import { ImageUpload } from "../store/actions/ImageUpload";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import ErrorMessage from "../component/ErrorMessage/ErrorMessage";

const Register = () => {
  const userCreated = useSelector((state) => state.AuthReducer.statusText);
  const loading = useSelector((state) => state.loader);
  const errors = useSelector((state) => state.AuthReducer);
  const history = useHistory();
  
  useEffect(() => {
    userCreated === "Created" && history.push("/login");
  }, [userCreated, history]);
  // to can redirect to login page

  const dispatch = useDispatch();
  const initialValues = {
    file: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile_number: "",
  };
  const validationSchema = Yup.object({
    file: Yup.mixed().required("Image is required"),
    name: Yup.string().required("Required"),
    email: Yup.string().email("Must be valid E-mail").required("Required"),
    password: Yup.string().required("Required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    mobile_number: Yup.string()
      .required("Required")
      .test(
        "len",
        "Must be exactly 10 characters",
        (val) => val && val.length === 10
      ),
  });
  const onSubmit = (values, onSubmitProps) => {
    const mobile_number = `+20${values.mobile_number}`;
    values = { ...values, mobile_number };
    const Image = new FormData();
    Image.append("file", values.file);
    dispatch(ImageUpload(Image));
    delete values["file"];
    dispatch(RegisterRequest(values));
    onSubmitProps.resetForm();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return !loading ? (
    <div className="container">
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        encType="multipart/form-data"
      >
        <div className="form-group">
          <label htmlFor="file">Upload image</label>
          <Input
            type="file"
            className="form-control"
            id="file"
            name="file"
            onBlur={formik.handleBlur}
            onChange={(event) =>
              formik.setFieldValue("file", event.target.files[0])
            }
          />
          <small className="form-text text-muted">
            {formik.errors.file && formik.touched.file ? (
              <div className="text-danger">{formik.errors.file}</div>
            ) : errors.length ? (
              <ErrorMessage type="file" errors={errors} />
            ) : (
              <span>Image is required</span>
            )}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <Input
            type="text"
            className="form-control"
            id="name"
            placeHolder="enter Username"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <small className="form-text text-muted">
            {formik.errors.name && formik.touched.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : errors.length ? (
              <ErrorMessage type="name" errors={errors} />
            ) : (
              <span>UserName is required</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <Input
            type="email"
            className="form-control"
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
            ) : errors.length ? (
              <ErrorMessage type="email" errors={errors} />
            ) : (
              <span>It must be valid E-mail adress</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
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
            ) : errors.length ? (
              <ErrorMessage type="password" errors={errors} />
            ) : (
              <span>Recommended strong password</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation">Confirm you password</label>
          <Input
            type="password"
            className="form-control"
            id="password_confirmation"
            name="password_confirmation"
            placeHolder="confirm your password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password_confirmation}
          />
          <small className="form-text text-muted">
            {formik.errors.password_confirmation &&
            formik.touched.password_confirmation ? (
              <div className="text-danger">
                {formik.errors.password_confirmation}
              </div>
            ) : errors.length ? (
              <ErrorMessage type="password_confirmation" errors={errors} />
            ) : (
              <span>the same as your password above</span>
            )}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="mobile_number">Phone number</label>
          <Input
            type="number"
            className="form-control"
            id="mobile_number"
            name="mobile_number"
            placeHolder="enter phone number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.mobile_number}
          />
          <small className="form-text text-muted">
            {formik.errors.mobile_number && formik.touched.mobile_number ? (
              <div className="text-danger">{formik.errors.mobile_number}</div>
            ) : errors.length ? (
              <ErrorMessage type="mobile_number" errors={errors} />
            ) : (
              <span>Must be valid phone number</span>
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

export default Register;
