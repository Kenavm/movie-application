import { Film } from "../model/Film.js";

//gets all films
//GET /api/films
export const getFilms = async (req, res, next) => {
	if (req.query.year !== undefined) {
		const filmYear = req.query.year;
		try {
			const films = await Film.find({ year: filmYear });
			if (!films) {
				return res.status(400).json({ success: false });
			}
			res.status(200).json({
				success: true,
				count: films.length,
				data: films,
				msg: `displaying ${films.length} films from ${req.query.year}`,
			});
		} catch (err) {
			res.status(400).json({ success: false });
		}
	} else {
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
	}
};

//get film by ID
//GET /api/films/:id

export const getFilmByID = async (req, res, next) => {
	try {
		const films = await Film.findById(req.params.id);
		if (!films) {
			return res.status(400).json({ success: false });
		}
		res.status(200).json({
			success: true,
			count: films.length,
			data: films,
			msg: `displaying film with ID ${req.params.id}`,
		});
	} catch (err) {
		res.status(400).json({ success: false });
	}
};
