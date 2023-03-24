import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/Homepage";
import { FilmPage } from "./pages/filmPage/FilmPage";
import { Comments } from "./features/commentsList/Comments";
import { useEffect, useState } from "react";
import { fetchFilms } from "./api/fetchFilms";
import FilmType from "./utils/types/FilmType";
import { Films } from "./pages/films/Films";
import { Filterbar } from "./components/Filterbar";
import { generatePages } from "./utils/functions/utilityFunctions";

function App() {
	const [films, setFilms] = useState<Array<FilmType>>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [filmToView, setFilmtoView] = useState<FilmType | undefined>({
		_id: "",
		title: "",
		plot: "",
		poster: "",
		genres: [],
		runtime: 0,
		year: 0,
		imdb: {
			rating: 0,
			votes: 0,
		},
	});

	function handlePagination(buttonIndex: number) {
		setPage(buttonIndex);
	}

	function handleDetailClick(id: string) {
		const film = films.find((film) => film._id === id);
		setFilmtoView(film);
	}


	useEffect(() => {
		async function loadFilms() {
			const data = await fetchFilms(page);
			const films = await data.films;

			const totalPages = data.totalPages;
			setFilms(films);
			setTotalPages(totalPages);
		}
		loadFilms();
	}, [page]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            films={films}
            onHandleDetailClick={handleDetailClick}
            onGeneratePages={generatePages}
            onHandlePagination={handlePagination}
          />
        }
      />
      {
        <Route
          path="/films"
          element={
            <Films
              films={films}
              onHandleDetailClick={handleDetailClick}
              onGeneratePages={generatePages}
              onHandlePagination={handlePagination}
            />
          }
        />
      }
      <Route
        path="/film/:filmSlug"
        element={
          <FilmPage
            id={filmToView!._id}
            title={filmToView!.title}
            plot={filmToView!.plot}
            poster={filmToView!.poster}
            genres={filmToView!.genres}
            runtime={filmToView!.runtime}
            year={filmToView!.year}
            imdb={filmToView!.imdb}
          />
        }
      />
      <Route path="/comments" element={<Comments id={filmToView!._id} />} />
    </Routes>
  );
}

export default App;
