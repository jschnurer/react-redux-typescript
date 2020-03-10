import { combineReducers } from "redux";
import { sessionReducer } from "./session/reducers"
import { postReducer } from "./post/reducers";
import { errorReducer } from "./error/reducers";

export const rootReducer = combineReducers({
  session: sessionReducer,
  post: postReducer,
  error: errorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;