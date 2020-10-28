import { LOAD_POSTS } from "../types";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:{
      return {...state, posts: action.posts}
    }
    default:
      return state;
  }
};
