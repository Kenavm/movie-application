import FilmType from "../../utils/types/FilmType";
import "./FilmList.css";
import {Card} from '../../components/Card'

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
                onClick={() => props.onHandleDetailClick(film._id)}
                className={"film"}
                type={"filmLayout"}
                title={film.title}
                poster={film.poster}
                />
            );
          })
        : props.films?.map((film) => {
            return (
              <Card
                onClick={() => props.onHandleDetailClick(film._id)}
                className={"film"}
                type={"filmLayout"}
                poster={film.poster}
                />
            );
          })}
    </div>
  );
}

export { FilmList };
