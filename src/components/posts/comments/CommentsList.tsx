import React from "react";
import { useDispatch } from "react-redux";
import Comment from "./Comment";
import useSelector from "../../../store/useSelector";
import { fetchComments } from "../../../store/comment/actions";
import InlineSpinner from "../../misc/InlineSpinner";
import NewComment from "./NewComment";

const Divider: React.FC = () => 
  <hr style={{height: 3, border: "none", borderRadius: "100%", margin: "2em 0"}} className="accent4-bg" />;

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

  const newComment = <NewComment />

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
        {newComment}
        <Divider />
        {comments[postId].sort((a, b) => a.time < b.time ? -1 : 1).map(c => <Comment key={c.id} {...c} />)}
      </div>
    </>;
  } else {
    return <>
      {title}
      {newComment}
      <Divider />
      *crickets*
    </>;
  }
}

export default CommentsList;