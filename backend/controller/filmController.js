import { Film } from "../model/Film.js";

//gets all films
//GET /api/films
export const getFilms = async (req, res, next) => {
	try {
		const films = await Film.find();

		if (!films) {
			return res.status(400).json({ success: false });
		}

		res.status(200).json({
			success: true,
			count: films.length,
			data: films,
			msg: "show all films",
		});
	} catch (err) {
		res.status(400).json({ success: false });
	}
};
