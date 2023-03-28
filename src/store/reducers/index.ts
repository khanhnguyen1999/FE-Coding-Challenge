import { combineReducers, Reducer } from "redux";
import consumer from './statics/consumer';
import error from "./statics/error";
import loading from "./statics/loading";
import user from "./statics/user";


export interface InjectedReducers {
  [key: string]: Reducer;
}

export function createReducer(injectedReducers?: InjectedReducers) {
  return combineReducers({
    user,
    error,
    loading,
    consumer,
    ...injectedReducers,
  });
}
