export interface PostComment {
  id: number,
  body: string,
  postId: number,
  userId: string,
  time: Date | null
}

export interface PostIdToPostCommentsMap {
  [postId: number]: PostComment[]
}

export interface CommentState {
  comments: PostIdToPostCommentsMap,
  isFetching: boolean
}

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const START_FETCHING_COMMENTS = 'START_FETCHING_COMMENTS';
export const STOP_FETCHING_COMMENTS = 'STOP_FETCHING_COMMENTS';
export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';

export interface FetchCommentsAction {
  type: typeof FETCH_COMMENTS,
  postId: number
}

interface CommentsReceivedAction {
  type: typeof COMMENTS_RECEIVED,
  comments: PostComment[],
  postId: number
}

interface StartFetchingCommentsAction {
  type: typeof START_FETCHING_COMMENTS
}

interface StopFetchingCommentsAction {
  type: typeof STOP_FETCHING_COMMENTS
}

export type CommentActionTypes =
  FetchCommentsAction |
  CommentsReceivedAction |
  StartFetchingCommentsAction |
  StopFetchingCommentsAction;