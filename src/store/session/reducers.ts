import {
  SessionState,
  SessionActionTypes,
  LOG_IN
} from './types'

const initialState: SessionState = {
  isLoggedIn: false,
  username: "",
  authToken: ""
}

export function sessionReducer(
  state = initialState,
  action: SessionActionTypes
): SessionState {
  switch(action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true,
        username: action.payload.username,
        authToken: "AUTHTOKEN_TODO"
      };
    default: {
      return state;
    }
  }
}