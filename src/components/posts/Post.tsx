import React, { useEffect } from "react";
import ModalSpinner from "../misc/ModalSpinner";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../store/post/actions";
import { Post as PostObj } from "../../store/post/types";
import useSelector from "../../store/useSelector";

interface PostParams {
  match: {
    params: {
      id: string
    }
  },
  isFetching: boolean,
  posts: PostObj[]
}

const Post: React.FunctionComponent<PostParams> = ({match: {params: { id }}}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.posts.find(x => x.id === parseInt(id, 10)));
  const isFetching = useSelector(state => state.post.isFetching);

  useEffect(() => {
    if (!post) {
      dispatch(fetchPost(parseInt(id)));
    }
  }, [dispatch, id, post]);

  if (isFetching) {
    return <ModalSpinner />;
  }

  if (!post) {
    return <>
      <h2>Post not found</h2>
      <p>The requested post was not found.</p>
    </>;
  }

  return <>
    {post.title}
    {post.body}
  </>;
}

export default Post;