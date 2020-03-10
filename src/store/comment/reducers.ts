import cloneDeep from "lodash/cloneDeep";
import { CommentState, START_FETCHING_COMMENTS, STOP_FETCHING_COMMENTS, CommentActionTypes, COMMENTS_RECEIVED } from './types'

const initialState: CommentState = {
  comments: [],
  isFetching: false,
}

export function commentReducer(
  state = initialState,
  action: CommentActionTypes
): CommentState {
  switch(action.type) {
    case START_FETCHING_COMMENTS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case STOP_FETCHING_COMMENTS: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case COMMENTS_RECEIVED: {
      let newState = cloneDeep(state);
      newState.comments[action.postId] = action.comments;
      return newState;
    }
    default: {
      return state;
    }
  }
}