import {
  Action as ReduxAction,
  combineReducers,
  createStore,
  Dispatch as ReduxDispatch,
  Store as ReduxStore
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { State } from "./index";

import userReducer from "./reducers/user";

type Action = ReduxAction<string>;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;

export function createReduxStore() {
  return createStore<State, Action, any, any>(
    combineReducers<State>({
      user: userReducer
    }),
    composeWithDevTools()
  );
}
