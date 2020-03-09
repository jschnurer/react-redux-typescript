export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostState {
  posts: Post[],
  isFetching: boolean
}

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const PUT_ALL_POSTS = 'PUT_ALL_POSTS';
export const PUT_POST = 'PUT_POST';
export const START_FETCHING = 'START_FETCHING';
export const STOP_FETCHING = 'STOP_FETCHING';

interface FetchAllPostsAction {
  type: typeof FETCH_ALL_POSTS
}

export interface FetchPostAction {
  type: typeof FETCH_POST,
  postId: number
}

interface PutAllPosts {
  type: typeof PUT_ALL_POSTS,
  payload: Post[]
}

interface PutPost {
  type: typeof PUT_POST,
  payload: Post
}

interface StartFetching {
  type: typeof START_FETCHING
}

interface StopFetching {
  type: typeof STOP_FETCHING
}

export type PostActionTypes =
  FetchAllPostsAction |
  FetchPostAction |
  PutAllPosts |
  PutPost |
  StartFetching |
  StopFetching;