export interface Post {
  userId: string,
  id: number,
  title: string,
  body: string,
  time: Date
}

export interface PostState {
  posts: Post[],
  isFetching: boolean,
  fetchedAll: boolean,
}

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const START_FETCHING_POSTS = 'START_FETCHING_POSTS';
export const STOP_FETCHING_POSTS = 'STOP_FETCHING_POSTS';

interface FetchAllPostsAction {
  type: typeof FETCH_ALL_POSTS
}

export interface FetchPostAction {
  type: typeof FETCH_POST,
  postId: number
}

interface PostsReceivedAction {
  type: typeof POSTS_RECEIVED,
  payload: Post[]
}

interface StartFetchingPostsAction {
  type: typeof START_FETCHING_POSTS
}

interface StopFetchingPostsAction {
  type: typeof STOP_FETCHING_POSTS
}

export type PostActionTypes =
  FetchAllPostsAction |
  FetchPostAction |
  PostsReceivedAction |
  StartFetchingPostsAction |
  StopFetchingPostsAction;