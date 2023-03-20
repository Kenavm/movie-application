import FilmType from "../../utils/FilmType";
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
            <h2>{film.title}</h2>
            <img src={film.poster} />
          </div>
        );
      })}
    </div>
  );
}

export { FilmList };
