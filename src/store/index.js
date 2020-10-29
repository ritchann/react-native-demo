import { createStore, combineReducers, applyMiddleware } from "redux";
import { postReducer } from "./reducers/post";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { epic } from "../store/epic/epic";

const rootReducer = combineReducers({ post: postReducer });
export const rootEpic = combineEpics(epic);

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);

export default createStore(rootReducer, applyMiddleware(epicMiddleware));
