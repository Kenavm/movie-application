import mongoose from "mongoose";
import { Schema } from "mongoose";
import { filmSchema } from "../model/Film";
import { cinemaConnection } from "../databases";

function migrateDb() {
  const DB_SRC_URL =
    "mongodb+srv://movie-application-user:Db2oCqbS0fiewy7h@cluster0.ecks9tp.mongodb.net/sample_mflix";

  const sourceCollectionName = "movies";
  const targetCollectionName = "films";

  mongoose.connect(DB_SRC_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const sourceDb = mongoose.connection;
  sourceDb.once("open", async function () {
    cinemaConnection.once("open", async function () {
      const sourceSchema = new Schema({
        _id: String,
        plot: String,
        genres: Array,
        runtime: Number,
        cast: Array,
        num_mflix_comments: Number,
        title: String,
        fullplot: String,
        countries: Array,
        released: Date,
        directors: Array,
        rated: String,
        awards: {
          wins: Number,
          nominations: Number,
          text: String,
        },
        lastupdated: String,
        year: Number,
        imdb: {
          rating: Number,
          votes: Number,
          id: String,
        },
        type: String,
        tomatoes: {
          viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number,
          },
          lastUpdated: Date,
        },
      });

      const sourceModel = sourceDb.model(sourceCollectionName, sourceSchema);
      const targetModel = cinemaConnection.model(targetCollectionName, filmSchema);

      const data = await sourceModel.find({
        poster: { $exists: true },
        type: "movie",
        "imdb.rating": { $gte: 8.5 },
      });
      console.log(data);
      await targetModel.insertMany(data);

      await sourceDb.close();
      await cinemaConnection.close();
    });
  });
}

export { migrateDb };
