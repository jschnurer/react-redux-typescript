export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostState {
  posts: Post[],
  isFetching: boolean,
  fetchError: string,
}

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const START_FETCHING_POSTS = 'START_FETCHING_POSTS';
export const STOP_FETCHING_POSTS = 'STOP_FETCHING_POSTS';
export const FETCHING_POSTS_FAILED = 'FETCHING_POSTS_FAILED';
export const CLEAR_FETCH_ERROR = 'CLEAR_FETCH_ERROR';

interface FetchAllPostsAction {
  type: typeof FETCH_ALL_POSTS
}

export interface FetchPostAction {
  type: typeof FETCH_POST,
  postId: number
}

interface PostsReceived {
  type: typeof POSTS_RECEIVED,
  payload: Post[]
}

interface StartFetching {
  type: typeof START_FETCHING_POSTS
}

interface StopFetching {
  type: typeof STOP_FETCHING_POSTS
}

interface FetchFailed {
  type: typeof FETCHING_POSTS_FAILED,
  error: string
}

interface ClearFetchError {
  type: typeof CLEAR_FETCH_ERROR,
}

export type PostActionTypes =
  FetchAllPostsAction |
  FetchPostAction |
  PostsReceived |
  StartFetching |
  StopFetching |
  FetchFailed |
  ClearFetchError;