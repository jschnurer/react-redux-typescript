import {
  PostState,
  GET_ALL_POSTS,
  GET_POST,
  PostActionTypes
} from './types'

const initialState: PostState = {
  posts: [{
    id: 1,
    userId: 1,
    title: "Sample Post",
    body: "This was a triumph."
  }]
}

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch(action.type) {
    case GET_ALL_POSTS: {
      return state;
    }
    case GET_POST: {
      return state;
    }
    default: {
      return state;
    }
  }
}