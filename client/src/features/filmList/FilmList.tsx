import FilmType from "../../utils/types/FilmType";
import { isImage } from "../../utils/functions/utilityFunctions";
import "./FilmList.css";

function FilmList(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
}) {
  return (
    <div className="films">
      {props.films?.map((film) => {
        return (
          <div
            onClick={() => props.onHandleDetailClick(film._id)}
            className="film"
          >
            
            <img src={film.poster} />
          </div>
        );
      })}
    </div>
  );
}

export { FilmList };
