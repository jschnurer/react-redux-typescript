import { all } from "@redux-saga/core/effects";
import postSagas from "./post/postSagas";
import postListSagas from "./postList/postListSagas";

/**
 * Combines the sagas exported from the various saga files into one root saga for use by the middleware.
 * This is done so that the middleware doesn't need to know about every single individual saga defined
 * anywhere in the application.
*/
export default function* sagas() {
  yield all([
    postListSagas(),
    postSagas(),
  ]);
}