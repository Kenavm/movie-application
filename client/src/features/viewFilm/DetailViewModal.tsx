import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Label } from "../../components/Label";
import './DetailViewModal.css'

function DetailViewModal(props: {
  id: string;
  title: string;
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
        <div className="body"></div>
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
