import React from "react";
import { useDispatch } from "react-redux";
import { Post } from "../../../store/post/types";
import { fetchComments } from "../../../store/post/actions";
import Comment from "./Comment";

interface CommentsListProps {
  post: Post
}

const CommentsList: React.FunctionComponent<CommentsListProps> = ({post}) => {
  const dispatch = useDispatch();
  
  return <>
    <h2>Comments</h2>
    {post.comments === null &&
      <button onClick={() => dispatch(fetchComments(post.id))}>Load Comments</button>
    }
    {post.comments !== null &&
      <div>
        {post.comments.map(c => <Comment key={c.id} comment={c} />)}
      </div>
    }
  </>;
}

export default CommentsList;