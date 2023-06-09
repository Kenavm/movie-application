import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/Homepage";
import { FilmPage } from "./pages/filmPage/FilmPage";
import { Comments } from "./features/commentsList/Comments";
import { useEffect, useState } from "react";
import { fetchFilms } from "./api/fetchFilms";
import FilmType from "./utils/types/FilmType";
import { Films } from "./pages/films/Films";
import CommentType from "./utils/types/CommentType";
import { fetchComments } from "./api/fetchComments";

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
  const [allComments, setAllComments] = useState<Array<CommentType>>([]);
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [input, setInput] = useState("");

	function handlePagination(buttonIndex: number) {
		setPage(buttonIndex);
	}

  function handleDetailClick(id: string) {
    const film = films.find((film) => film._id === id);
    setFilmtoView(film);
  }

  useEffect(() => {
    async function loadComments() {
      const data = await fetchComments("", page);
      const comments = data.comments;
      const totalPages = data.totalPages;
      console.log(comments);
      setTotalPages(totalPages);
      setAllComments(comments);
    }
    loadComments();
  }, [page]);

	function handleInput(input) {
		setInput(input);
	}

	function handleFilter(filterInput: string | number) {
		setFilter(filterInput);
	}

	useEffect(() => {
		async function loadFilms() {
			const data = await fetchFilms(page, filter, input);
			const films = data.films;

			const totalPages = data.totalPages;
			setFilms(films);
			setTotalPages(totalPages);
			console.log(data);
		}
		loadFilms();
	}, [page, input, filter]);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<HomePage
						films={films}
						onHandleDetailClick={handleDetailClick}
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
              onHandlePagination={handlePagination}
              onHandleFilter={handleFilter}
              onHandleInput={handleInput}					/>
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
			<Route path="/comments" element={<Comments comments={allComments} onHandlePagination={handlePagination} />} />
		</Routes>
	);
}

export default App;
