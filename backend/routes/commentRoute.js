import express from "express";
import { getComments } from "../controller/commentsController.js";

const commentRouter = express.Router();

commentRouter.use("/", getComments);

export { commentRouter };
