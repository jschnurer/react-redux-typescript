import React from "react";
import "./Comment.scoped.css";
import FormattedDateString from "../../misc/FormattedDateString";
import { PostComment } from "../../../store/comment/types";

interface CommentProps {
  comment: PostComment
}

const Comment: React.FunctionComponent<CommentProps> = (props) => {
  return <div className="holder">
    <div className="speech-bubble">{props.comment.body}</div>
    <label>
      {props.comment.userId}
      {props.comment.time &&
        <span>, <FormattedDateString date={props.comment.time} /></span>
      }
    </label>
  </div>
}

export default Comment;