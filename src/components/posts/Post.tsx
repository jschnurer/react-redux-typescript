import React, { useEffect } from "react";
import ModalSpinner from "../misc/ModalSpinner";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../store/post/actions";
import { Post as PostObj } from "../../store/post/types";
import useSelector from "../../store/useSelector";
import { Link } from "react-router-dom";
import CommentsList from "./comments/CommentsList";
import FormattedDateString from "../misc/FormattedDateString";

interface PostParams {
  match: {
    params: {
      id: string
    }
  },
  isFetchingPosts: boolean,
  posts: PostObj[]
}

const Post: React.FC<PostParams> = ({match: {params: { id }}}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.posts.find(x => x.id === parseInt(id, 10)));
  const isFetchingPosts = useSelector(state => state.post.isFetching);

  useEffect(() => {
    if (!post) {
      dispatch(fetchPost(parseInt(id, 10)));
    }
  }, [dispatch, id, post]);

  if (isFetchingPosts) {
    return <ModalSpinner />;
  }

  return <>
    <h2>{post?.title || "Post not found"}</h2>
    {post &&
      <span>{post.userId}, <FormattedDateString date={post.time} /></span>
    }
    <p>{post?.body || "The requested post was not found."}</p>
    <Link to="/posts">&lt; Back to Posts</Link>
    {post &&
      <CommentsList postId={post.id} />
    }
  </>;
}

export default Post;