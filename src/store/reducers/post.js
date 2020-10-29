import { ActionType } from "../types";

const initialState = {
  posts: [],
  data: ''
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTS: {
      return { ...state, posts: action.posts };
    }
    case ActionType.SETDATA: {
      return { ...state, data: action.data };
    }
    default:
      return state;
  }
};
