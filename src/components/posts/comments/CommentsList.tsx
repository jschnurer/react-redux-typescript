import React from "react";
import { useDispatch } from "react-redux";
import { Post } from "../../../store/post/types";
import { fetchComments } from "../../../store/post/actions";
import Comment from "./Comment";

interface CommentsListProps {
  post: Post
}

const CommentsList: React.FunctionComponent<CommentsListProps> = ({ post }) => {
  const dispatch = useDispatch();

  let title = <h2>Comments</h2>;

  if (post.comments === null) {
    return <>
      {title}
      <button onClick={() => dispatch(fetchComments(post.id))}>
        Load Comments
      </button>
    </>;
  } else if (post.comments && post.comments.length) {
    return <>{title}
      <div>
        {post.comments.map(c => <Comment key={c.id} comment={c} />)}
      </div>
    </>;
  } else {
    return <>
      {title}
      *crickets*
    </>;
  }
}

export default CommentsList;