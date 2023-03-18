import express from "express";
import cors from "cors";
import { migrateDb } from "./utils/migrateDb.js";
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

migrateDb();


app.listen(PORT);