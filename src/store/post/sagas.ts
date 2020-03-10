import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Post, FETCH_ALL_POSTS, FETCH_POST, FetchPostAction, FETCH_COMMENTS, PostComment } from "./types";
import { postsReceived, startFetching, stopFetching, commentsReceived } from "./actions";
import { pushError } from "../error/actions";
import PostsApi from "../../apis/posts/PostsApi";

function* fetchAllPostsAsync() {
  yield put(startFetching());
  try {
    const posts: Post[] = yield call(PostsApi.fetchAll);
    yield put(postsReceived(posts));
  }
  catch (error) {
    let err: Error = error;
    yield put(pushError(err.message));
  }
  finally {
    yield put(stopFetching());
  }
}

function* fetchPostAsync(action: FetchPostAction) {
  yield put(startFetching());
  try {
    const post: Post = yield call(PostsApi.fetch, action.postId);
    yield put(postsReceived([post]));
  }
  catch (error) {
    let err: Error = error;
    yield put(pushError(err.message));
  } finally {
    yield put(stopFetching());
  }
}

function* fetchCommentsAsync(action: FetchPostAction) {
  yield put(startFetching());
  try {
    const comments: PostComment[] = yield call(PostsApi.fetchComments, action.postId);
    yield put(commentsReceived(comments, action.postId));
  }
  catch (error) {
    let err: Error = error;
    yield put(pushError(err.message));
  } finally {
    yield put(stopFetching());
  }
}

export function* watchFetchAllPostsAsync() {
  yield takeLatest(FETCH_ALL_POSTS, fetchAllPostsAsync);
}

export function* watchFetchPostAsync() {
  yield takeLatest(FETCH_POST, fetchPostAsync);
}

export function* watchFetchCommentsAsync() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsAsync);
}