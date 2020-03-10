import cloneDeep from "lodash/cloneDeep";
import findIndex from "lodash/findIndex";
import {
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

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch(action.type) {
    case POSTS_RECEIVED: {
      let newState = cloneDeep(state);

      action.payload.forEach(post => {
        let ix = findIndex(newState.posts, p => p.id === post.id);
        if (ix > -1) {
          newState.posts[ix] = post;
        } else {
          newState.posts.push(post);
        }
      });

      newState.posts = newState.posts.sort((a, b) => a.title < b.title ? -1 : 1);

      return newState;
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