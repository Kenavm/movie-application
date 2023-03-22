import FilmType from "../../utils/types/FilmType";
import "./FilmList.css";
import { Card } from "../../components/Card";

function FilmList(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  type: string;
}) {
  return (
    <div className="films">
      {props.type === "filmLayout"
        ? props.films?.map((film) => {
            return (
              <Card
                onHandleDetailClick={props.onHandleDetailClick}
                className={"film"}
                type={"filmLayout"}
                filmId={film._id}
                title={film.title}
                poster={film.poster}
              />
            );
          })
        : props.films?.map((film) => {
            return (
              <Card
                onHandleDetailClick={props.onHandleDetailClick}
                className={"film"}
                filmId={film._id}
                type={"mainLayout"}
                title={film.title}
                poster={film.poster}
              />
            );
          })}
    </div>
  );
}

export { FilmList };
