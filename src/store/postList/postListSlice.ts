import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Operation } from "../../helpers/operation";
import { Post } from "../../integrations/posts/PostsApi";

interface PostListState {
  /** An operation containing the post list. */
  postData: Operation<Post[]>,
}

const initialState: PostListState = {
  postData: {
    isWorking: true,
    payload: [],
  },
};

const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    startLoadPosts: state => {
      // Reset the data to show that an operation is working.
      state.postData = {
        isWorking: true,
      };
    },
    finishLoadPosts: (state, { payload: postData }: PayloadAction<Operation<Post[]>>) => {
      // Simply save the operation back to the state.
      state.postData = postData;
    },
    cancelLoadPosts: (state) => {
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
  startLoadPosts,
  finishLoadPosts,
  cancelLoadPosts,
} = postListSlice.actions;

export default postListSlice.reducer;