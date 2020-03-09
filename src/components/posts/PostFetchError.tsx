import React from "react";
import { useDispatch } from "react-redux";
import useSelector from "../../store/useSelector";
import { clearFetchError } from "../../store/post/actions";
import "./PostFetchError.scoped.css";

export interface PostFetchErrorParams {
  error: string
}

const PostFetchError: React.FunctionComponent<PostFetchErrorParams> = (props) => {
  const { fetchError } = useSelector(store => store.post);
  const dispatch = useDispatch();

  if (!fetchError) {
    return null;
  }

  return (
    <div>
      <span>
        Error
        <span onClick={() => dispatch(clearFetchError())}>x</span>
      </span>
      {props.error}
    </div>
  );
}

export default PostFetchError;