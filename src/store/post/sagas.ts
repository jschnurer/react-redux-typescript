import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Post, FETCH_ALL_POSTS, FETCH_POST, FetchPostAction } from "./types";
import { postsReceived, startFetching, stopFetching } from "./actions";
import { pushError } from "../error/actions";
import JsonApi from "../../apis/posts/JsonApi";

function* fetchAllPostsAsync() {
  yield put(startFetching());
  try {
    const posts: Post[] = yield call(JsonApi.fetchAll);
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
    const post: Post = yield call(JsonApi.fetch, action.postId);
    yield put(postsReceived([post]));
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
  yield takeEvery(FETCH_POST, fetchPostAsync);
}