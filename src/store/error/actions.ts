import {
  PUSH_ERROR,
  CLEAR_ERROR,
  ErrorActionTypes
} from './types';

export function pushError(message: string) : ErrorActionTypes {
  return {
    type: PUSH_ERROR,
    message
  }
}

export function clearError(errorId: number) : ErrorActionTypes {
  return {
    type: CLEAR_ERROR,
    errorId
  }
}