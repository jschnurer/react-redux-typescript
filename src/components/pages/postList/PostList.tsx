import OperationDisplay from "components/common/operationDisplay/OperationDisplay";
import { AppRoutes } from "components/routing/Routing";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cancelLoadPosts, startLoadPosts } from "store/postList/postListSlice";
import { useAppDispatch, useAppSelector } from "store/store";

const PostList = () => {
  // Connect to redux and get the post data operation.
  const postData = useAppSelector(store => store.postList.postData);
  // Set up a dispatcher so that actions can be sent back to redux.
  const dispatch = useAppDispatch();

  // Define an effect with no dependencies. Since it has no dependencies,
  // the effect will run the first time the component is mounted.
  useEffect(() => {
    // Dispatch the startLoadPosts action to redux. This will be handled
    // in the postListSlice.ts reducer to set isWorking to true in the operation
    // so that a spinner will appear on the page.
    // Additionally, a saga defined in postListSagas.ts is listening for this action
    // and will call a remote API to get data.
    dispatch(startLoadPosts());

    // Here, a cleanup function is returned from the effect. When the component is
    // unmounted, this function will be called.
    return () => {
      // Dispatch the cancelLoadPosts action to redux. This will tell both the
      // reducer and the sagas to stop trying to load data (if it's currently loading).
      dispatch(cancelLoadPosts());
    };
  }, [dispatch]);

  return (
    <div>
      <h1>List of Posts</h1>

      {/* Render an OperationDisplay which will show a spinner, an error message, or the children. */}
      <OperationDisplay
        operation={postData}
      >
        {
          /**
           * The only time these children will be rendered is when the operation
           * is successful and not working anymore.
           * Render each post's title.
           */
        }
        {(postData.payload || []).map(post => (
          <h4 key={post.id}>
            <Link to={AppRoutes.Post.replace(":id", post.id.toString())}>
              {post.title}
            </Link>
          </h4>
        ))}
      </OperationDisplay>
    </div>
  );
};

export default PostList;