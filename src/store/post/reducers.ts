import cloneDeep from "lodash/cloneDeep";
import findIndex from "lodash/findIndex";
import {
  Post,
  PostState,
  PostActionTypes,
  POSTS_RECEIVED,
  START_FETCHING_POSTS,
  STOP_FETCHING_POSTS,
} from './types'

const initialState: PostState = {
  posts: [],
  isFetching: false,
}

const postSorter = (a: Post, b: Post) => a.title < b.title ? -1 : 1;

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch(action.type) {
    case POSTS_RECEIVED: {
      let newPosts = cloneDeep(state.posts);
      action.payload.forEach(post => {
        let ix = findIndex(newPosts, p => p.id === post.id);
        if (ix > -1) {
          newPosts[ix] = post;
        } else {
          newPosts.push(post);
        }
      });

      return {
        ...state,
        posts: newPosts.sort(postSorter),
      };
    }
    case START_FETCHING_POSTS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case STOP_FETCHING_POSTS: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
}