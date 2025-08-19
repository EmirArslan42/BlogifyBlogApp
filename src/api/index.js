import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const apiEndpoint = "http://localhost:5000/posts/";

export const getPosts = async () => await axios.get(apiEndpoint);

export const createPost = async (post) => await axios.post(apiEndpoint, post);

// export const getPost=createAsyncThunk(`${apiEndpoint}/${getPosts}`,async()=>{
//     const res = await axios.get(apiEndpoint);
//   return res.data;
// })

// export const createPostt = createAsyncThunk(`${apiEndpoint}/${getPosts}`, async (post) => {
//   const res = await axios.post(apiEndpoint, post);
//   return res.data;
// });