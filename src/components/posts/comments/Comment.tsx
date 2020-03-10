import React from "react";
import { PostComment } from "../../../store/post/types";
import "./Comment.scoped.css";

interface CommentProps {
  comment: PostComment
}

const Comment: React.FunctionComponent<CommentProps> = (props) => {
  return <div className="holder">
    <div className="speech-bubble">{props.comment.body}</div>
    <label>{props.comment.userId}</label>
  </div>
}

export default Comment;