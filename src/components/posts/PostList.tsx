import * as React from "react";
import useSelector from "../../store/useSelector";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../store/post/actions";

const PostList: React.FunctionComponent = () => {
  const posts = useSelector(state => state.post.posts);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
      <button onClick={() => dispatch(fetchAllPosts())}>Load Posts</button>
    </React.Fragment>
  );
}

export default PostList;