import {
  Post,
  FETCH_ALL_POSTS,
  FETCH_POST,
  PUT_ALL_POSTS,
  PUT_POST,
  PostActionTypes,
  START_FETCHING,
  STOP_FETCHING,
} from './types';

export function fetchAllPosts(): PostActionTypes {
  return {
    type: FETCH_ALL_POSTS
  };
}

export function fetchPost(postId: number): PostActionTypes {
  return {
    type: FETCH_POST,
    postId
  };
}

export function putAllPosts(posts: Post[]): PostActionTypes {
  return {
    type: PUT_ALL_POSTS,
    payload: posts
  };
}

export function putPost(post: Post): PostActionTypes {
  return {
    type: PUT_POST,
    payload: post
  };
}

export function startFetching() : PostActionTypes {
  return {
    type: START_FETCHING
  }
}

export function stopFetching() : PostActionTypes {
  return {
    type: STOP_FETCHING
  }
}