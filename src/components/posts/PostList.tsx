import * as React from "react";
import useSelector from "../../store/useSelector";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../store/post/actions";
import ModalSpinner from "../misc/ModalSpinner";
import { Link } from "react-router-dom";
import "./PostList.scoped.css";

const PostList: React.FC = () => {
  const { posts, isFetching, fetchedAll } = useSelector(state => state.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!fetchedAll) {
      dispatch(fetchAllPosts());
    }
  }, [dispatch, fetchedAll]);

  return (
    <>
      <h2>Posts</h2>
      {posts.sort((a,b) => a.time < b.time ? 1 : -1).map(post =>
        <Link key={post.id} to={`/posts/${post.id}`}>
          {post.title}
        </Link>)
      }
      <Link to="/posts/new">New Post &gt;</Link>
      {isFetching && <ModalSpinner />}
    </>
  );
}

export default PostList;