import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: String,
  email: String,
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  text: String,
  date: Date,
});

const Comment = model("Comment", commentSchema);

export { commentSchema, Comment };
