"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../reducers/post";
import { makeStyles } from "@mui/material/styles";
import PenIcon from "@mui/icons-material/Create";
import { redirect } from "next/navigation";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

export default function Posts() {
  //redirect("/posts");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts()); // burada action tetikleniyor
  }, [dispatch]);

  return (
    <div>
      
    </div>
  );
}

//   return (
//     <ul>
//       {posts.map((p) => (
//         <li key={p.id}>{p.title}</li>
//       ))}
//     </ul>
//   );
// }
