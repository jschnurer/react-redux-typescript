import { all } from 'redux-saga/effects';

import {watchFetchAllPostsAsync, watchFetchPostAsync, watchFetchCommentsAsync} from "./post/sagas";

export default function* rootSaga() {
  yield all([
    watchFetchAllPostsAsync(),
    watchFetchPostAsync(),
    watchFetchCommentsAsync(),
  ]);
}