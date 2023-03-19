import { Film } from "../model/Film.js";

//gets all films
//GET /api/films
export const getFilms = async (req, res, next) => {
  const perPage = 12;
  const page = req.query.page;

  if (page !== undefined) {
    const count = await Film.countDocuments();

    const totalPages = Math.ceil(count / perPage);
    const films = await Film.find()
      .skip((page - 1) * perPage)
      .limit(perPage);
    res.json({ films, totalPages });
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
