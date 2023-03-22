import { Filterbar } from "../components/Filterbar";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import FilmType from "../utils/types/FilmType";
import { FilmList } from "../features/filmList/FilmList";
import { Pagination } from "../features/filmList/pagination/Pagination";

function FilmsLayout(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  return (
    <>
      <Navbar
        className={"navbar"}
        films={props.films}
        onHandleDetailClick={props.onHandleDetailClick}
      />
      <Filterbar />
      <FilmList
        films={props.films}
        onHandleDetailClick={props.onHandleDetailClick}
        type={"filmLayout"}
      />
      <Pagination
        onGeneratePages={props.onGeneratePages}
        onHandlePagination={props.onHandlePagination}
      />
      <Footer />
    </>
  );
}

export { FilmsLayout };
