import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  _id: Object,
  name: String,
  email: String,
  movie_id: Object,
  text: String,
  date: Date,
});

export const Comment = model("Comment", commentSchema);
