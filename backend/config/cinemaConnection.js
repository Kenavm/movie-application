import mongoose from "mongoose";

const cinemaConnection = async () => {
	const conn = mongoose.connect(process.env.DB_CINEMA_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log(`CinemaDB connected`.cyan.underline.bold);

	return conn;
};

export default cinemaConnection;
