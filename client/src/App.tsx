import { useEffect, useState } from "react";
import "./App.css";
import FilmType from "./utils/types/FilmType";
import { FilmList } from "./features/filmList/FilmList";
import { fetchFilms } from "./api/fetchFilms";
import { Pagination } from "./features/filmList/Pagination";
import { DetailViewModal } from "./features/viewFilm/DetailViewModal";

function App() {
  const [films, setFilms] = useState<Array<FilmType>>([]);
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [openDetailView, setOpenDetailView] = useState(false);
  const [filmToView, setFilmtoView] = useState({
    _id: "",
    title: "",
    plot: "",
    poster: "",
    genres: [],
    runtime: 0,
    year: 0,
    imdb: {
        rating: 0,
        votes: 0
    }
  });

  function generatePages() {
    const pagesLength = [];
    for (let i = 0; i < totalPages; i++) {
      pagesLength.push(i);
    }
    return pagesLength;
  }

  useEffect(() => {
    async function pagination() {
      const data = await fetchFilms(page);
      const films = await data.films;
    
      const totalPages = data.totalPages;
      setFilms(films);
      setTotalPages(totalPages);
    }
    pagination();
  }, [page]);
 
  function handlePagination(buttonIndex: number) {
    setPage(buttonIndex);
  }
 
  function handleDetailClick(id: string) {
    const film = films.find((film) => film._id === id);
    
    setFilmtoView(film);
    setOpenDetailView(true);
  }

  return (
    <div className="App">
      <FilmList films={films} onHandleDetailClick={handleDetailClick} />
      {openDetailView && (
        <DetailViewModal
          id={filmToView._id}
          title={filmToView.title}
          plot={filmToView.plot}
          poster={filmToView.poster}
          genres={filmToView.genres}
          runtime={filmToView.runtime}
          year={filmToView.year}
          imdb={filmToView.imdb}
          openDetailView={setOpenDetailView}
        />
      )}
      <Pagination
        movies={films}
        onGeneratePages={generatePages}
        onHandlePagination={handlePagination}
      />
    </div>
  );
}

export default App;
