import {
  Post,
  FETCH_ALL_POSTS,
  FETCH_POST,
  POSTS_RECEIVED,
  PostActionTypes,
  START_FETCHING_POSTS,
  STOP_FETCHING_POSTS,
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

export function postsReceived(posts: Post[]): PostActionTypes {
  return {
    type: POSTS_RECEIVED,
    payload: posts
  };
}

export function startFetching() : PostActionTypes {
  return {
    type: START_FETCHING_POSTS
  }
}

export function stopFetching() : PostActionTypes {
  return {
    type: STOP_FETCHING_POSTS
  }
}