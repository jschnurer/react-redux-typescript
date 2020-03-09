import { call, put, takeLatest } from 'redux-saga/effects';
import { Post, FETCH_ALL_POSTS, FETCH_POST, FetchPostAction } from "./types";
import { putAllPosts, putPost, startFetching, stopFetching } from "./actions";
import PostsApi from "../../apis/posts/PostsApi";

function* fetchAllPostsAsync() {
  yield put(startFetching());
  const posts: Post[] = yield call(PostsApi.fetchAll);
  yield put(putAllPosts(posts));
  yield put(stopFetching());
}

function* fetchPostAsync(action: FetchPostAction) {
  yield put(startFetching());
  const post: Post = yield call(PostsApi.fetch, action.postId);
  yield put(putPost(post));
  yield put(stopFetching());
}

export function* watchFetchAllPostsAsync() {
  yield takeLatest(FETCH_ALL_POSTS, fetchAllPostsAsync);
}

export function* watchFetchPostAsync() {
  yield takeLatest(FETCH_POST, fetchPostAsync);
}
