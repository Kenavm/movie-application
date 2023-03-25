import { Filterbar } from "../../components/Filterbar";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import FilmType from "../../utils/types/FilmType";
import { FilmList } from "../../features/filmList/FilmList";
import Container from "../../components/Container/Container";
import "./HomeLayout.css";

function HomeLayout(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onHandlePagination: Function;
}) {
  const filmsToDisplay = props.films.slice(0, 8);

  return (
    <>
      <Container className="homeLayoutContainer">
        <Navbar />
        <Filterbar />
        <FilmList
          films={filmsToDisplay}
          onHandleDetailClick={props.onHandleDetailClick}
          type={"mainLayout"}
        />
      </Container>
      <Footer />
    </>
  );
}

export { HomeLayout };
