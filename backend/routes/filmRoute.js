import express from "express";
import { getFilmByID, getFilms } from "../controller/filmController.js";

const filmRouter = express.Router();

filmRouter.use("/", getFilms);
filmRouter.use("/:id", getFilmByID);

export { filmRouter };
