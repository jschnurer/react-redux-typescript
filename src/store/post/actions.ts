import { GET_ALL_POSTS, GET_POST, PostActionTypes } from './types';

export function getAllPosts(): PostActionTypes {
  return {
    type: GET_ALL_POSTS
  };
}

export function getPost(postId: number): PostActionTypes {
  return {
    type: GET_POST,
    meta: {
      postId
    }
  };
}