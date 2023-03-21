import express from "express";
import {
	createComment,
	getCommentByID,
	getComments,
} from "../controller/commentsController.js";

const commentRouter = express.Router();

commentRouter.route("/").get(getComments);

commentRouter.route("/:id").get(getCommentByID).post(createComment);

export { commentRouter };
