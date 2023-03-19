import express from "express";
import {
	getFilmByID,
	getFilmByYear,
	getFilms,
} from "../controller/filmController.js";

const filmRouter = express.Router();

filmRouter.route("/").get(getFilms);

filmRouter.route("/:id").get(getFilmByID);

export { filmRouter };
