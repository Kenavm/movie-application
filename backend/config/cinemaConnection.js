import mongoose from "mongoose";
import colors from "colors";

const cinemaConnection = async () => {
	const conn = await mongoose.connect(process.env.DB_CINEMA_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log(`CinemaDB connected`.cyan.underline.bold);

	return conn;
};

export default cinemaConnection;
