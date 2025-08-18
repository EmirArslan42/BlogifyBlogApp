import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },
  content: { type: String },
  tag: { type: String },
  image: { type: String },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
