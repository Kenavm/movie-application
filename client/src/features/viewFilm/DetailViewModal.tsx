import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Label } from "../../components/Label";
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
            <p>Year: {props.year}</p>
            <p>Runtime: {props.runtime} minutes</p>
            <div className="genres">
              <p>Genres: </p>
              {props.genres.map((genre) => (
                <p>{genre}</p>
              ))}
            </div>
            <p>Imdb rating: {props.imdb.rating}</p>
            <p>{props.plot}</p>
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
