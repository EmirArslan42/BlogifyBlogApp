import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
    { id: 4, title: "Post 4" },
    { id: 5, title: "Post 5" },
    { id: 6, title: "Post 6" },
    { id: 7, title: "Post 7" },         
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state) => {
      // state zaten dolu, reducer ile değişiklik yapmamıza gerek yok
      // ama DevTools'da görünmesi için aşağıdaki gibi küçük bir değişiklik yapabiliriz:
      state.posts = [...state.posts];
    },
    createPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { fetchPosts, createPost } = postSlice.actions;
export default postSlice.reducer;
