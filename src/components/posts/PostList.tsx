import * as React from "react";
import useSelector from "../../store/useSelector";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../store/post/actions";
import ModalSpinner from "../misc/ModalSpinner";
import { Link } from "react-router-dom";

const PostList: React.FunctionComponent = () => {
  const { posts, isFetching, fetchedAll } = useSelector(state => state.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(!fetchedAll) {
      dispatch(fetchAllPosts());
    }
  }, [dispatch]);

  return (
    <>
      <h2>Posts</h2>
      {posts.map(post =>
        <Link key={post.id} to={`/posts/${post.id}`} style={{ display: "block" }}>
          {post.title}
        </Link>)
      }
      {isFetching && <ModalSpinner />}
    </>
  );
}

export default PostList;