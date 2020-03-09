import { all } from 'redux-saga/effects';

import {watchFetchAllPostsAsync} from "./post/sagas";

export default function* rootSaga() {
  yield all([
    watchFetchAllPostsAsync()
  ]);
}