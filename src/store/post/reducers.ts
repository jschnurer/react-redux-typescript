import {
  Post,
  PostState,
  PostActionTypes,
  PUT_ALL_POSTS,
  PUT_POST,
  START_FETCHING,
  STOP_FETCHING
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
    case PUT_ALL_POSTS: {
      return {
        ...state,
        posts: action.payload
          .slice()
          .sort(postSorter),
      };
    }
    case PUT_POST: {
      let existing = state.posts.find(x => x.id === action.payload.id);
      if(existing) {
        return {
          ...state,
          posts: [
            ...state.posts.filter(x => x.id !== action.payload.id),
            action.payload
          ].sort(postSorter)
        }
      } else {
        return {
          ...state,
          posts: [
            ...state.posts,
            action.payload
          ].sort(postSorter)
        };
      }
    }
    case START_FETCHING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case STOP_FETCHING: {
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