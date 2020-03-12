import React, { Dispatch } from "react";
import { withFormik, FormikProps, Field, Form } from "formik";
import * as Yup from "yup";
import "./NewPost.scoped.css";
import { postsReceived } from "../../store/post/actions";
import { connect } from "react-redux";
import { Post } from "../../store/post/types";
import ModalSpinner from "../misc/ModalSpinner";
import JsonApi from "../../apis/posts/JsonApi";
import { pushError } from "../../store/error/actions";
import SuccessBlock from "../misc/statusBlocks/SuccessBlock";

interface FormValues {
  title: string,
  body: string,
}

interface InitialNewPostValues {
  initialTitle: string,
  initialBody: string,
}

const initialValues: InitialNewPostValues = {
  initialTitle: '',
  initialBody: '',
}

interface FormStatus {
  success: string
}

type NewPostFormValues = InitialNewPostValues & DispatchProps;

const InnerForm: React.FC<FormikProps<FormValues>> = (props) => {
  const { touched, errors, isSubmitting, status } = props;
  const formStatus: FormStatus = status;

  return <>
    <h2>New Post</h2>
    {formStatus?.success &&
      <>
        <SuccessBlock>{formStatus.success}</SuccessBlock>
        <br />
      </>
    }
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
    {isSubmitting && <ModalSpinner />}
  </>;
}

const FormikNewPostForm = withFormik<NewPostFormValues, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      title: props.initialTitle,
      body: props.initialBody,
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required("A post needs a title."),
    body: Yup.string().required("Is a post without anything in it really a post?")
  }),

  handleSubmit: (values, { props, setSubmitting, resetForm, setStatus }) => {
    JsonApi.createNewPost({
      id: 0,
      title: values.title,
      body: values.body,
      userId: "jschnurer",
      time: new Date()
    })
      .then(post => {
        props.postsReceived([post]);
        resetForm();
        setStatus({
          success: "Your post was saved successfully."
        });
      })
      .catch(error => {
        let err: Error = error;
        props.pushError(err.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  },
})(InnerForm);

interface DispatchProps {
  pushError: (message: string) => void,
  postsReceived: (posts: Post[]) => void,
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  pushError: (message) => dispatch(pushError(message)),
  postsReceived: (posts) => dispatch(postsReceived(posts)),
});

const ConnectedNewPostForm = connect(null, (dispatch) => ({
  ...mapDispatchToProps(dispatch),
  ...initialValues
}))(FormikNewPostForm);

export default ConnectedNewPostForm;