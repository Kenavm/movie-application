import { Filterbar } from "../../components/Filterbar";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import FilmType from "../../utils/types/FilmType";
import { FilmList } from "../filmList/FilmList";

function MainLayout(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  const filmsToDisplay = props.films.slice(0, 8);

  return (
    <>
      <Navbar
        className={"navbar"}
        films={props.films}
        onHandleDetailClick={props.onHandleDetailClick}
      />
      <Filterbar />
      <FilmList
        films={filmsToDisplay}
        onHandleDetailClick={props.onHandleDetailClick}
        type={"mainLayout"}
      />
      <Footer />
    </>
  );
}

export { MainLayout };
