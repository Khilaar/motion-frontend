import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import userReducer from "./Slices/userSlice";
import postsReducer from "./Slices/postsSLice";
import searchReducer from "./Slices/searchSlice";

const store = configureStore({
  reducer: {
    count: counterReducer,
    user: userReducer,
    posts: postsReducer,
    search: searchReducer,
  },
});

export { store };
