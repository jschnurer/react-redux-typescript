import { call, put, takeEvery } from 'redux-saga/effects';
import { Post, FETCH_ALL_POSTS } from "./types";
import { putAllPosts } from "./actions";
import PostsApi from "../../apis/posts/PostsApi";

function* fetchAllPostsAsync() {
  console.log('calling api...');
  const posts: Post[] = yield call(PostsApi.fetchAll);
  console.log('pushing to store...');
  console.log(posts);
  yield put(putAllPosts(posts));
}

export function* watchFetchAllPostsAsync() {
  yield takeEvery(FETCH_ALL_POSTS, fetchAllPostsAsync);
}