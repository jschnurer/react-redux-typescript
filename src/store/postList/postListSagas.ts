import * as Effects from "redux-saga/effects";
import PostsApi, { Post } from "integrations/posts/PostsApi";
import { cancelLoadPosts, finishLoadPosts, startLoadPosts } from "./postListSlice";

/** Combines all the post sagas into one root saga for easy exporting. */
export default function* postListSagas() {
  yield Effects.all([
    loadPostsAsync(),
  ]);
}

function* loadPostsAsync() {
  yield Effects.takeLatest(startLoadPosts, function* (action) {
    // Type check for the action to let Typescript know it's the 
    // type that we are expecting.
    if (!startLoadPosts.match(action)) {
      return;
    }

    try {
      let controller = new AbortController();

      // Start a race between:
      // - Calling the API by using the API class defined in /integrations
      // - Listening for a cancelLoadPosts action to be dispatched
      // Whichever one finishes first will be the one to use.
      const result: {
        posts: Post[],
        canceled: Effects.TakeEffect,
      } = yield Effects.race({
        posts: Effects.call(PostsApi.getAllPosts, controller.signal),
        canceled: Effects.take(cancelLoadPosts),
      });

      // If the cancelLoadPosts action was received before the API returned
      // its response, then send a signal to the fetch request to abort
      // the call to the API.
      if (result.canceled) {
        controller.abort();
        return;
      }

      // Notify redux that the operation is finished successfully.
      yield Effects.put(finishLoadPosts({
        isWorking: false,
        payload: result.posts,
      }));
    } catch (err: any) {
      // Notify redux that the operation has failed.
      yield Effects.put(finishLoadPosts({
        errorMessage: err?.toString(),
        isWorking: false,
      }));
    }
  });
}