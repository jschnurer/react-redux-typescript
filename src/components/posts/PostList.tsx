import * as React from "react";
import useSelector from "../../store/useSelector";

const PostList: React.FunctionComponent = () => {
  const posts = useSelector(state => state.post.posts);

  return (
    <div>
      {posts.map(post => <a>{post.title}</a>)}
    </div>
  );
}

export default PostList;