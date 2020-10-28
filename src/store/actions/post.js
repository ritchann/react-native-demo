import { LOAD_POSTS } from "../types";

export const loadPosts = (data) => {
  return {
    type: LOAD_POSTS,
    posts: data,
  };
};
