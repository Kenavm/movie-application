import { Film } from "../model/Film.js";

//gets all films
//GET /api/films
export const getFilms = async (req, res) => {
	const perPage = 12;
	const page = req.query.page;

	if (page !== undefined) {
		const count = await Film.countDocuments();

		const totalPages = Math.ceil(count / perPage);
		const films = await Film.find()
			.skip((page - 1) * perPage)
			.limit(perPage);
		res.json({ films, totalPages });
	} else if (req.query.year !== undefined) {
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
			console.log(films);
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

//gets film by id
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
