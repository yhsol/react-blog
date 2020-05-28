import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String },
  body: { type: String },
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
