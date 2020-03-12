import React from "react";
import { useDispatch } from "react-redux";
import Comment from "./Comment";
import useSelector from "../../../store/useSelector";
import { fetchComments } from "../../../store/comment/actions";
import InlineSpinner from "../../misc/InlineSpinner";

interface CommentsListProps {
  postId: number
}

const CommentsList: React.FC<CommentsListProps> = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments, isFetching } = useSelector(state => state.comment);

  let title = <h2>Comments</h2>;

  if (isFetching) {
    return <>
      {title}
      <InlineSpinner isCenterBlock={true} />
    </>;
  }

  if (!comments[postId]) {
    return <>
      {title}
      <button onClick={() => dispatch(fetchComments(postId))}>
        Load Comments
      </button>
    </>;
  } else if (comments[postId] && comments[postId].length) {
    return <>{title}
      <div>
        {comments[postId].sort((a,b) => a.time < b.time ? -1 : 1).map(c => <Comment key={c.id} {...c} />)}
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