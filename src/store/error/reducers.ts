import {
  ErrorMessage,
  ErrorState,
  PUSH_ERROR,
  CLEAR_ERROR,
  ErrorActionTypes
} from "./types";

const initialState: ErrorState = {
  errors: []
}

const getNewErrorMessage = (state: ErrorState, message: string): ErrorMessage => {
  // Get largest id from state and add 1 or just set id to 1.
  let id = state.errors.length
    ? Math.max.apply(Math, state.errors.map(x => x.id)) + 1
    : 1;

  return {
    id,
    message
  }
}

export function errorReducer(
  state = initialState,
  action: ErrorActionTypes
): ErrorState {
  switch(action.type) {
    case PUSH_ERROR: {
      return {
        errors: state.errors.concat(getNewErrorMessage(state, action.message)),
      }
    }
    case CLEAR_ERROR: {
      return {
        errors: state.errors.filter(x => x.id !== action.errorId),
      }
    }
    default: {
      return state;
    }
  }
}