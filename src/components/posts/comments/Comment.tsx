import React from "react";
import "./Comment.scoped.css";
import FormattedDateString from "../../misc/FormattedDateString";
import { PostComment } from "../../../store/comment/types";

const Comment: React.FunctionComponent<PostComment> = (comment) => {
  return <div className="holder">
    <div className="speech-bubble">{comment.body}</div>
    <label>
      {comment.userId}
      {comment.time &&
        <span>, <FormattedDateString date={comment.time} /></span>
      }
    </label>
  </div>
}

export default Comment;