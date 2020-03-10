import { all } from 'redux-saga/effects';

import {watchFetchAllPostsAsync, watchFetchPostAsync} from "./post/sagas";
import { watchFetchCommentsAsync } from './comment/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchAllPostsAsync(),
    watchFetchPostAsync(),
    watchFetchCommentsAsync(),
  ]);
}