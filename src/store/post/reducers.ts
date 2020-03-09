import {
  PostState,
  PostActionTypes,
  PUT_ALL_POSTS
} from './types'

const initialState: PostState = {
  posts: []
}

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch(action.type) {
    case PUT_ALL_POSTS: {
      return {
        posts: action.payload
      }
    }
    default: {
      return state;
    }
  }
}