import mongoose from "mongoose";

const cinemaConnection = async () => {
	const conn = await mongoose.connect(process.env.DB_CINEMA_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log(
		`CinemaDB connected: ${conn.connection.host}`.cyan.underline.bold
	);
	return conn;
};

export default cinemaConnection;
