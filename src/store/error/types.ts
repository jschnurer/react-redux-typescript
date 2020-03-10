export interface ErrorMessage {
  id: number,
  message: string,
}

export interface ErrorState {
  errors: ErrorMessage[]
}

export const PUSH_ERROR = 'PUSH_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

interface PushError {
  type: typeof PUSH_ERROR,
  message: string
}

interface ClearError {
  type: typeof CLEAR_ERROR,
  errorId: number
}

export type ErrorActionTypes =
  PushError |
  ClearError;