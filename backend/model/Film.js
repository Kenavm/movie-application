import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	title: String,
	plot: String,
	genres: Array,
	runtime: Number,
	year: Number,
	imdb: {
		rating: Number,
		votes: Number,
		id: String,
	},
	poster: String,
});

const Film = mongoose.model("Movie", filmSchema, "films");

export { Film, filmSchema };
