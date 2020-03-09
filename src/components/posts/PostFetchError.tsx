import React from "react";
import { useDispatch } from "react-redux";
import useSelector from "../../store/useSelector";
import { clearFetchError } from "../../store/post/actions";

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
    <div className="post-fetch-error">
      <span className="title-bar">
        Error
        <a onClick={() => dispatch(clearFetchError())}>x</a>
      </span>
      {props.error}
    </div>
  );
}

export default PostFetchError;