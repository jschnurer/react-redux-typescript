import * as React from "react";
import useSelector from "../../store/useSelector";

const PostList: React.FunctionComponent = () => {
  const posts = useSelector(state => state.post.posts);

  return (
    <React.Fragment>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
    </React.Fragment>
  );
}

export default PostList;