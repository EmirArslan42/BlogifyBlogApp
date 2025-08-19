import express from "express";
import {getPosts,createPost} from "../controllers/posts.js";
const router=express.Router();

// https://localhost/posts/
// GET POST DELETE UPDATE PATCH

router.get("/",getPosts);
router.post("/",createPost);
//router.post()
export default router;