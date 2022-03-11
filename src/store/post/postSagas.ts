import * as Effects from "redux-saga/effects";
import PostsApi, { Post } from "integrations/posts/PostsApi";
import { cancelLoadPost, finishLoadPost, startLoadPost } from "./postSlice";
import { all } from "redux-saga/effects";
import UsersApi, { User } from "integrations/users/UsersApi";
import CommentsApi, { PostComment } from "integrations/comments/CommentsApi";

/** Combines all the post sagas into one root saga for easy exporting. */
export default function* postSagas() {
  yield Effects.all([
    loadPostAsync(),
  ]);
}

function* loadPostAsync() {
  yield Effects.takeLatest(startLoadPost, function* (action) {
    // Type check for the action to let Typescript know it's the 
    // type that we are expecting.
    if (!startLoadPost.match(action)) {
      return;
    }

    try {
      let controller = new AbortController();

      // Start a race between:
      // - Calling the API by using the API class esdefined in /integrations
      // - Listening for a cancelLoadPost action to be dispatched
      // Whichever one finishes first will be the one to use.
      const result: {
        data: [Post, User, PostComment[]],
        canceled: Effects.TakeEffect,
      } = yield Effects.race({
        data: Effects.call(loadAllPostData, action.payload, controller.signal),
        canceled: Effects.take(cancelLoadPost),
      });

      // If the cancelLoadPosts action was received before the API returned
      // its response, then send a signal to the fetch request to abort
      // the call to the API.
      if (result.canceled) {
        controller.abort();
        throw new Error("Request aborted.");
      }

      // Notify redux that the operation is finished successfully.
      yield Effects.put(finishLoadPost({
        isWorking: false,
        payload: {
          post: result.data[0],
          user: result.data[1],
          comments: result.data[2],
        },
      }));
    } catch (err: any) {
      // Notify redux that the operation has failed.
      yield Effects.put(finishLoadPost({
        errorMessage: err?.toString(),
        isWorking: false,
      }));
    }
  });
}

function* loadAllPostData(postId: number, abortSignal: AbortSignal) {
  // Load the post and its comments simultaneously.
  const [
    post,
    comments,
  ]: [Post, PostComment[]] = yield all([
    Effects.call(PostsApi.getPost, postId, abortSignal),
    Effects.call(CommentsApi.getCommentsForPost, postId, abortSignal),
  ]);

  // Use the userId from the post to load the user's information.
  const user: User = yield Effects.call(UsersApi.getUser, postId, abortSignal);

  // Return all 3 pieces of data.
  return [post, user, comments];
}