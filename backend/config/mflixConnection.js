import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Film } from "../model/Film.js";
import { commentSchema, Comment } from "../model/Comment.js";
import cinemaConnection from "./cinemaConnection.js";

async function mflixConnection() {
  const sourceCollectionName = "movies";
  const targetFilmCollectionName = "films";
  const commentsCollectionName = "comments";

  const sourceDb = mongoose.createConnection(process.env.DB_MFLIX_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //console.log(`mflixDB connected: ${sourceDb.connection.host}`.cyan.underline.bold);

  sourceDb.once("open", async function () {
    const cinemaDb = await cinemaConnection();

    cinemaDb.once("open", async function () {
      //film
      const sourceMovieSchema = new Schema({
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

      const sourceModel = sourceDb.model(
        sourceCollectionName,
        sourceMovieSchema
      );
      const targetModel = cinemaConnection.model(targetCollectionName, Film);

      const data = await sourceModel.find({
        poster: { $exists: true },
        type: "movie",
        "imdb.rating": { $gte: 8.5 },
      });

       //await targetModel.insertMany(data);

      //comments
      //----------------------------------
      const movieIds = data.map((movie) => movie._id);

      const sourceCommentModel = sourceDb.model(
        commentsCollectionName,
        commentSchema
      );
      const targetCommentModel = cinemaDb.model(
        commentsCollectionName,
        commentSchema
      );

      const comments = await sourceCommentModel.find({
        movie_id: { $in: movieIds },
      });
    
      //await targetCommentModel.insertMany(comments);
      //-----------------------------------
	 
      await sourceDb.close();
      await cinemaDb.close();
    });
  });
}

export { mflixConnection };
