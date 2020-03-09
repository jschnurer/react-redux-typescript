import { combineReducers } from "redux";
import { sessionReducer } from "./session/reducers"
import { postReducer } from "./post/reducers";

export const rootReducer = combineReducers({
  session: sessionReducer,
  post: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;