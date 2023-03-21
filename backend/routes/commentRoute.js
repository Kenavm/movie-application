import express from "express";
import {
	getCommentByID,
	getComments,
} from "../controller/commentsController.js";

const commentRouter = express.Router();

commentRouter.route("/").get(getComments);

commentRouter.route("/:id").get(getCommentByID);

export { commentRouter };
