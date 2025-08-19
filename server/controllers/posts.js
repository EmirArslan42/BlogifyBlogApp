import Post from "../models/posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// export const createPost = async (req, res) => {
//   const newPost = new Post(req.body);
//   try {
//     await newPost.save();
//     res.status(201).json(newPost); // <-- bu eksikti
//   } catch (error) {
//     res.status(404).json({
//       message: error.message,
//     });
//   }
// };



export const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body); // body parsing için app.use(express.json()) olmalı
    await newPost.save();

    return res.status(201).json(newPost); // ✅ created
  } catch (error) {
    console.error("Create Post Error:", error);
    return res.status(500).json({ message: error.message }); // 500 daha uygun
  }
};
