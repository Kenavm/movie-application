import express from 'express'
import { loadFilms } from '../controller/filmController.js';

const filmRouter = express.Router();


filmRouter.get("/", loadFilms)

export {filmRouter}