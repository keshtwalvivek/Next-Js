import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const BlogModel = mongoose.model.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
