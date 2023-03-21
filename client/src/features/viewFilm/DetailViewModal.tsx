import { Button } from "../../components/Button";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Span from "../../components/Span";
import "./DetailViewModal.css";

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
    <div className="modalOverlay">
      <div className="modalContainer">
        <div className="title">
          <Header heading={props.title} />
        </div>
        <div className="body">
          <img className="image" src={props.poster}></img>
          <div>
            <Paragraph content={`Year: ${props.year}`} />
            <Paragraph content={`Runtime: ${props.runtime}`} />
            <Span
              className="genres"
              content={`Genres: ${props.genres.join(", ")}`}
            ></Span>
            <Paragraph content={`Imdb rating: ${props.imdb.rating}`} />
            <Paragraph content={props.plot} />
          </div>
        </div>
        <div className="footer">
          <Button
            text={"Close"}
            className={"Close"}
            onClick={() => props.openDetailView(false)}
          />
        </div>
      </div>
    </div>
  );
}

export { DetailViewModal };
