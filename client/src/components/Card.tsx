import { Link } from "react-router-dom";

function Card(props: {
  className: string;
  filmId: string;
  title?: string;
  poster: string;
  type: string;
  onHandleDetailClick: Function;
}) {
  return (
    <div
      className={props.className}
      onClick={() => props.onHandleDetailClick(props.filmId)}
    >
      <Link to={`/film/${props.title?.replace(/[ ,]+/g, "-")}`}>
        {props.type === "filmLayout" ? <h2>{props.title}</h2> : null}
        <img src={props.poster} />
      </Link>
    </div>
  );
}

export { Card };
