import React from "react";
import "./Comment.scoped.css";
import FormattedDateString from "../../misc/FormattedDateString";
import { PostComment } from "../../../store/comment/types";
import { Link } from "react-router-dom";

const Comment: React.FunctionComponent<PostComment> = (comment) => {
  return <div className="holder">
    <div className="speech-bubble">{comment.body}</div>
    <label>
      <Link to={`/users/${comment.userId}`}>{comment.userId}</Link>
      {comment.time &&
        <span>, <FormattedDateString date={comment.time} /></span>
      }
    </label>
  </div>
}

export default Comment;