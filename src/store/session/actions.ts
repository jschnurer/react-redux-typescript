import { LOG_IN, SessionActionTypes, LogInCredentials } from './types';

export function logIn(credentials: LogInCredentials): SessionActionTypes {
  return {
    type: LOG_IN,
    payload: credentials
  };
}