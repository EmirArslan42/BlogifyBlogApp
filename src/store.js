import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./reducers/post.js";
export const store = configureStore({
  reducer: {
    posts:postReducer,
  },
  devtools: process.env.NODE_ENV !== "production",
});
