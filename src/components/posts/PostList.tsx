import * as React from "react";
import useSelector from "../../store/useSelector";
import { useDispatch } from "react-redux";
import { fetchAllPosts, fetchPost } from "../../store/post/actions";
import ModalSpinner from "../misc/ModalSpinner";

const PostList: React.FunctionComponent = () => {
  const { posts, isFetching } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    postIdEntry: "" as string
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const loadSingle = () => {
    let intPost = parseInt(state.postIdEntry, 10);
    if (intPost && intPost > 0) {
      dispatch(fetchPost(intPost));
    } else {
      alert("Invalid post id. Please enter between 1-100.");
    }
  }

  return (
    <React.Fragment>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
      <div>
        <h4>Load Posts Individually</h4>
        <p>
          <label>Post ID: </label>
          <input type="text" name="postIdEntry" onChange={handleInputChange} />
          <button onClick={loadSingle}>
            Load Post
          </button>
        </p>
        <h4>Load All Posts At Once</h4>
        <p>
          <button onClick={() => dispatch(fetchAllPosts())}>
            Load All Posts
          </button>
        </p>
      </div>
      {isFetching && <ModalSpinner />}
    </React.Fragment>
  );
}

export default PostList;