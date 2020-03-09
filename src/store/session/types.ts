export interface LogInCredentials {
  username: string,
  password: string
}

export const LOG_IN = 'LOG_IN';

interface LogInAction {
  type: typeof LOG_IN,
  payload: LogInCredentials
}

export interface SessionState {
  isLoggedIn: boolean,
  username: string,
  authToken: string
}

export type SessionActionTypes = LogInAction;