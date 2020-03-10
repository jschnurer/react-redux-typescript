import React from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../../store/error/actions";
import "./Error.scoped.css";
import { ErrorMessage } from "../../store/error/types";

export interface ErrorParams {
  error: ErrorMessage
}

const Error: React.FunctionComponent<ErrorParams> = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>
        Error
        <span onClick={() => dispatch(clearError(props.error.id))}>x</span>
      </span>
      {props.error.message}
    </div>
  );
}

export default Error;