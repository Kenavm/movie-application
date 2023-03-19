import express from "express";
import {
	getFilmByID,
	getFilmByYear,
	getFilms,
} from "../controller/filmController.js";

const filmRouter = express.Router();

filmRouter.route("/").get(getFilms).get(getFilmByYear);

filmRouter.route("/:id").get(getFilmByID);

export { filmRouter };
