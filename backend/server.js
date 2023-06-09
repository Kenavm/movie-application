import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { filmRouter } from "./routes/filmRoute.js";
import { commentRouter } from "./routes/commentRoute.js";
import cinemaConnection from "./config/cinemaConnection.js";
import colors from "colors";
import { mflixConnection } from "./config/mflixConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();

//loads the dotenv variables
dotenv.config({ path: "./config/config.env" });

cinemaConnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/films", filmRouter);
app.use("/api/comments", commentRouter);

app.listen(PORT, () =>
	console.log(
		`server runnning ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
