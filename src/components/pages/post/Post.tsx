import OperationDisplay from "components/common/operationDisplay/OperationDisplay";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { cancelLoadPost, startLoadPost } from "store/post/postSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import CommentDisplay from "./comment/CommentDisplay";
import "./Post.scoped.scss";

const Post: React.FC = () => {
  // Grab the post data operation from the store.
  const postOperation = useAppSelector(store => store.post.postData);
  const postData = postOperation.payload;

  const dispatch = useAppDispatch();
  // Get the id number from the url.
  const { id } = useParams();

  useEffect(() => {
    // Whenever the id changes, dispatch the action to load the post.
    dispatch(startLoadPost(Number(id)));

    // Cancel the loading of the post if this component unmounts.
    return () => {
      dispatch(cancelLoadPost());
    };
  }, [id, dispatch]);

  return (
    <div>
      <OperationDisplay
        operation={postOperation}
      >
        <h1>{postData?.post?.title}</h1>
        <h3>{postData?.user?.name} from <a href={`https://${postData?.user.website}`}>{postData?.user.website}</a></h3>
        {/** Split the post body by newline and render each line as its own paragraph.
         * Since each line might not be unique, use the index as the key.
         * */}
        {(postData?.post.body || "")
          .split('\n')
          .map((line, ix) =>
            <p key={ix}>{line}</p>
          )}
        <hr />
        <h2>Comments</h2>
        <div
          className="comment-list"
        >
          {postData?.comments.length
            ? <>
              {/** Render each of the comments. */}
              {postData.comments.map(comment => (
                <CommentDisplay
                  key={comment.id}
                  comment={comment}
                />
              ))}
            </>
            : <p>None</p>
          }
        </div>
      </OperationDisplay>
    </div>
  );
}

export default Post;