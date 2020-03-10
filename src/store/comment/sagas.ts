import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COMMENTS, PostComment, FetchCommentsAction } from "./types";
import { startFetching, stopFetching, commentsReceived } from "./actions";
import { pushError } from "../error/actions";
import PostsApi from "../../apis/posts/PostsApi";

function* fetchCommentsAsync(action: FetchCommentsAction) {
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

export function* watchFetchCommentsAsync() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsAsync);
}