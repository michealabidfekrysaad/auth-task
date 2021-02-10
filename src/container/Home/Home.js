import React, { useState } from "react";
import Input from "../../component/Input/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import Btn from "../../component/Btn/Btn";
import { ImageUpload } from "../../store/actions/ImageUpload";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const [message, setMessage] = useState(false);
  const initialValues = {
    file: "",
  };
  const validationSchema = Yup.object({
    file: Yup.mixed()
      .required("Image is required")
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  const onSubmit = (values) => {
    const Image = new FormData();
    Image.append("file", values.file);
    dispatch(ImageUpload(Image));
    setMessage(values.file.name);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <section>
      <form onSubmit={formik.handleSubmit} noValidate>
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
            ) : (
              <span>Image is required</span>
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
      <div className="text-center">
        {message && (
          <span className="text-success">Thanks for Uploading {message}</span>
        )}
      </div>
    </section>
  );
};

export default Home;
