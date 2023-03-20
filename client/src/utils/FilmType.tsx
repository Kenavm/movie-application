type FilmType = {
    _id: string;
    title: string;
    poster: string;
    genres: Array<string>;
    runtime: number;
    year: number;
    imdb: {
        rating: number,
        votes: number
    }
}


export default FilmType