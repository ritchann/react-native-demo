import { ActionType } from "../types";

export const loadPosts = (data) => {
  return {
    type: ActionType.LOAD_POSTS,
    posts: data,
  };
};

export const getDataAsync = () => {
  return { type: ActionType.GETDATAASYNC };
};

export const setData = (data) => {
  return { type: ActionType.SETDATA, data };
};
