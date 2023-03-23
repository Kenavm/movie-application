import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Span from "../../components/Span";
import ImageComponent from "../../components/ImageComponent";
import "./FilmPage.css";
import Container from "../../components/Container/Container";
import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router";

function FilmPage(props: {
  id: string;
  title: string;
  plot: string;
  poster: string;
  genres: Array<string>;
  runtime: number;
  year: number;
  imdb: {
    rating: number;
    votes: number;
  };
}) {
  const [imageError, setImageError] = useState(false);
  const history = useNavigate();

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <>
      {" "}
      <Navbar className={"navbar"} />
      <Container className="title">
        <Header heading={props.title} />
      </Container>
      <Container className="body">
        <ImageComponent
          className="image"
          src={
            imageError ? "/src/assets/images/notAvailable.jpg" : props.poster
          }
          onError={handleImageError}
        />
        <Container>
          <Paragraph content={`Year: ${props.year}`} />
          <Paragraph content={`Runtime: ${props.runtime}`} />
          <Span
            className="genres"
            content={`Genres: ${props.genres.join(", ")}`}
          ></Span>
          <Paragraph content={`Imdb rating: ${props.imdb.rating}`} />
          <Paragraph content={props.plot} />
        </Container>
       
      </Container>
      <Button text="Go Back" onClick={() => history(-1)}></Button>
      <Container className="footer"></Container>
    </>
  );
}

export { FilmPage };
