import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "integrations/users/UsersApi";
import { Operation } from "../../helpers/operation";
import { Post } from "../../integrations/posts/PostsApi";
import { PostComment } from "../../integrations/comments/CommentsApi";

interface LoadedPost {
  post: Post,
  user: User,
  comments: PostComment[],
}

interface PostState {
  /** An operation containing the post list. */
  postData: Operation<LoadedPost>,
}

const initialState: PostState = {
  postData: {
    isWorking: true,
  },
};

const counterSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    /**
     * The action must be defined here to set its payload type for the saga.
     * But since it's not used * in this reducer, it is named "_" to prevent
     * an unused variable warning.
     */
    startLoadPost: (state, _: PayloadAction<number>) => {
      // Reset the data to show that an operation is working.
      state.postData = {
        isWorking: true,
      };
    },
    finishLoadPost: (state, { payload: postData }: PayloadAction<Operation<LoadedPost>>) => {
      // Simply save the operation back to the state.
      state.postData = postData;
    },
    cancelLoadPost: (state) => {
      // Change isWorking to false but keep all other data in the operation.
      state.postData = {
        ...state.postData,
        isWorking: false,
      };
    },
  },
})

export const {
  // Post loading.
  startLoadPost,
  finishLoadPost,
  cancelLoadPost,
} = counterSlice.actions;

export default counterSlice.reducer;