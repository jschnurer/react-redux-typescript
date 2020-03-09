import { Post, FETCH_ALL_POSTS, FETCH_POST, PostActionTypes, PUT_ALL_POSTS } from './types';

export function fetchAllPosts(): PostActionTypes {
  return {
    type: FETCH_ALL_POSTS
  };
}

export function fetchPost(postId: number): PostActionTypes {
  return {
    type: FETCH_POST,
    meta: {
      postId
    }
  };
}

export function putAllPosts(posts: Post[]): PostActionTypes {
  return {
    type: PUT_ALL_POSTS,
    payload: posts
  };
}