import { Link } from "react-router-dom";
import { useState } from "react";
import ImageComponent from "./ImageComponent";

function Card(props: {
  className: string;
  filmId: string;
  title?: string;
  poster: string;
  type: string;
  onHandleDetailClick: Function;
}) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div
      className={props.className}
      onClick={() => props.onHandleDetailClick(props.filmId)}
    >
      <Link to={`/film/${props.title?.replace(/[ ,]+/g, "-")}`}>
        {props.type === "filmLayout" ? <h2>{props.title}</h2> : null}
        { 
          <ImageComponent src={imageError ? "/src/assets/images/notAvailable.jpg":props.poster} onError={handleImageError} />
        }
      </Link>
    </div>
  );
}

export { Card };