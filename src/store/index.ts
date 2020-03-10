import { combineReducers } from "redux";
import { sessionReducer } from "./session/reducers"
import { postReducer } from "./post/reducers";
import { errorReducer } from "./error/reducers";
import { commentReducer } from "./comment/reducers";

export const rootReducer = combineReducers({
  session: sessionReducer,
  post: postReducer,
  error: errorReducer,
  comment: commentReducer
});

export type RootState = ReturnType<typeof rootReducer>;