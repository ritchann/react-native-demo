import { ActionsObservable, combineEpics, ofType } from "redux-observable";
import { from } from "rxjs";
import { ActionType } from "../types";
import { ignoreElements, map, mergeMap } from "rxjs/operators";
import { getData } from '../api/api';
import { setData } from "../actions/post";

const getDataEpic = (action$) =>
  action$.pipe(
    ofType(ActionType.GETDATAASYNC),
    mergeMap(() => from(getData()).pipe(map((response) => setData(response))))
  );

export const epic = combineEpics(getDataEpic);
