import express from "express";
import { getFilms } from "../controller/filmController.js";

const filmRouter = express.Router();

filmRouter.use("/", getFilms);

export { filmRouter };
