import express from "express";
import { getFilmsById, getFilms } from "../controller/filmController.js";

const filmRouter = express.Router();

filmRouter.use("/", getFilms);
filmRouter.use("/:id", getFilmsById);

export { filmRouter };
