import mongoose from "mongoose";

const DB_CONNECTION_CINEMA =
"mongodb+srv://movie-application-user:Db2oCqbS0fiewy7h@cluster0.ecks9tp.mongodb.net/cinema";

const cinemaConnection = mongoose.createConnection(DB_CONNECTION_CINEMA)

export {cinemaConnection}