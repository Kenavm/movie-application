import { Film } from "../model/Film.js";

//gets all films
//GET /api/films
export const getFilms = async (req, res, next) => {
	const films = await Film.find();

	res.status(200).json({
		success: true,
		count: films.length,
		data: films,
		msg: "show all films",
	});
};
