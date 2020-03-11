import React from "react";
import { withFormik, FormikProps, Field, Form } from "formik";
import * as Yup from "yup";
import "./NewPost.scoped.css";

interface FormValues {
  title: string,
  body: string,
  isPrivate: boolean,
}

interface NewPostFormValues {
  initialTitle: string,
  initialBody: string,
  initialIsPrivate: boolean,
}

const InnerForm: React.FC<FormikProps<FormValues>> = (props) => {
  const { touched, errors, isSubmitting } = props;

  return <>
    <h2>New Post</h2>
    <Form>
      <div className="row">
        <Field
          type="text"
          name="title"
          placeholder="Title"
          className={touched.title && errors.title ? "input-validation-error" : ""}
        />
        {touched.title && errors.title && <div className="form-validation-error">{errors.title}</div>}
      </div>

      <div className="row">
        <Field
          type="text"
          name="body"
          as="textarea"
          className={touched.body && errors.body ? "input-validation-error" : ""}
        />
        {touched.body && errors.body && <div className="form-validation-error">{errors.body}</div>}
      </div>

      <div className="row">
        <label className="checkbox-label">
          <Field
            type="checkbox"
            name="isPrivate"
            className={touched.isPrivate && errors.isPrivate ? "input-validation-error" : ""}
          />
          <span className="checkbox-custom"></span>
          <span className="checkbox-text">Private</span>
        </label>
        {touched.isPrivate && errors.isPrivate && <div className="form-validation-error">{errors.isPrivate}</div>}
      </div>

      <div className="button-row">
        <button
          type="reset"
          disabled={isSubmitting}
          className="secondary">
          Reset
      </button>
        <button
          type="submit"
          disabled={isSubmitting}>
          Save Post
      </button>
      </div>
    </Form>
  </>;
}

const newPost = withFormik<NewPostFormValues, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      title: '',
      body: '',
      isPrivate: false,
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required("Required"),
    body: Yup.string().required("Required"),
    isPrivate: Yup.boolean().required("Required"),
  }),

  handleSubmit: values => {
    // do submitting things
  },
})(InnerForm);

export default newPost;