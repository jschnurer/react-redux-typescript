import {
  START_FETCHING_COMMENTS,
  STOP_FETCHING_COMMENTS,
  FETCH_COMMENTS,
  COMMENTS_RECEIVED,
  PostComment,
  CommentActionTypes
} from './types';

export function fetchComments(postId: number): CommentActionTypes {
  return {
    type: FETCH_COMMENTS,
    postId
  };
}

export function startFetching() : CommentActionTypes {
  return {
    type: START_FETCHING_COMMENTS
  }
}

export function stopFetching() : CommentActionTypes {
  return {
    type: STOP_FETCHING_COMMENTS
  }
}

export function commentsReceived(comments: PostComment[], postId: number): CommentActionTypes {
  return {
    type: COMMENTS_RECEIVED,
    comments: comments,
    postId
  };
}