export interface Post {
  userId: string,
  id: number,
  title: string,
  body: string,
  comments: PostComment[] | null,
  time: Date | null
}

export interface PostComment {
  id: number,
  body: string,
  postId: number,
  userId: string,
  time: Date | null
}

export interface PostState {
  posts: Post[],
  isFetching: boolean,
}

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const START_FETCHING_POSTS = 'START_FETCHING_POSTS';
export const STOP_FETCHING_POSTS = 'STOP_FETCHING_POSTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';

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

interface StartFetchingAction {
  type: typeof START_FETCHING_POSTS
}

interface StopFetchingAction {
  type: typeof STOP_FETCHING_POSTS
}

interface FetchCommentsAction {
  type: typeof FETCH_COMMENTS,
  postId: number
}

interface CommentsReceivedAction {
  type: typeof COMMENTS_RECEIVED,
  comments: PostComment[],
  postId: number
}

export type PostActionTypes =
  FetchAllPostsAction |
  FetchPostAction |
  PostsReceivedAction |
  StartFetchingAction |
  StopFetchingAction |
  FetchCommentsAction |
  CommentsReceivedAction;