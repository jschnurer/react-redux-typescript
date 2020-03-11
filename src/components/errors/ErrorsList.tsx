import React from "react";
import useSelector from "../../store/useSelector";
import Error from "./Error";
import "./ErrorsList.scoped.css";

const ErrorsList: React.FC = () => {
  const { errors } = useSelector(state => state.error);

  if (!errors.length) {
    return null;
  }

  return (
    <div>
      {errors.map(err => <Error key={err.id} {...err} />)}
    </div>
  );
}

export default ErrorsList;