import express from "express";
import { getFilmByID, getFilms } from "../controller/filmController.js";

const filmRouter = express.Router();

filmRouter.route("/").get(getFilms);
filmRouter.route("/:id").get(getFilmByID);

export { filmRouter };
