import { Button } from "../../components/Button";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Span from "../../components/Span";
import Image from "../../components/Image";
import "./DetailViewModal.css";
import Container from "../../components/Container/Container";

function DetailViewModal(props: {
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
  openDetailView: Function;
}) {
  return (
    <Container className={"modalOverlay"}>
      <Container className={"modalContainer"}>
        <Container className="title">
          <Header heading={props.title} />
        </Container>
        <Container className="body">
          <Image className="image" src={props.poster} />
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
        <Container className="footer">
          <Button
            text={"Close"}
            className={"Close"}
            onClick={() => props.openDetailView(false)}
          />
        </Container>
      </Container>
    </Container>
  );
}

export { DetailViewModal };
