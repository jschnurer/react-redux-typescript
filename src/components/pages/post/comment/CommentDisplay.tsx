import { PostComment } from "integrations/comments/CommentsApi";
import "./CommentDisplay.scoped.scss";

interface CommentDisplayProps {
  comment: PostComment,
}

const CommentDisplay: React.FC<CommentDisplayProps> = ({
  comment,
}) =>
  <div
    className="comment"
  >
    <span className="commentor">
      <span className="name">
        {comment.name}
      </span>
      <span className="email">
        {comment.email}
      </span>
    </span>

    {comment.body.split('\n').map((line, ix) => <p key={ix}>{line}</p>)}
  </div>;

export default CommentDisplay;