import { useEffect, useState } from "react";
import "./App.css";
import FilmType from "./utils/FilmType";
import { FilmList } from "./features/filmList/FilmList";
import { fetchFilms } from "./api/fetchFilms";
import { Pagination } from "./features/filmList/Pagination";

function App() {
  const [films, setFilms] = useState<Array<FilmType>>([]);
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);

  function generatePages() {
    const pagesLength = [];
    for (let i = 0; i < totalPages; i++) {
      if (i > 12) break;
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

  return (
    <div className="App">
      <FilmList films={films} />
      <Pagination
        movies={films}
        onGeneratePages={generatePages}
        onHandlePagination={handlePagination}
      />
    </div>
  );
}

export default App;
