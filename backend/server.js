import express from "express";
import cors from "cors";
import { filmRouter } from "./routes/filmRoute.js";

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use("/api/films", filmRouter)

app.listen(PORT);