import { Film } from "../model/Film.js";

async function loadFilms(req, res) {
  const allMovies = await Film.find();

  res.json(allMovies);
}

export { loadFilms };
