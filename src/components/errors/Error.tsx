import React from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../../store/error/actions";
import "./Error.scoped.css";
import { ErrorMessage } from "../../store/error/types";

const Error: React.FC<ErrorMessage> = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>
        Error
        <span onClick={() => dispatch(clearError(props.id))}>x</span>
      </span>
      {props.message}
    </div>
  );
}

export default Error;