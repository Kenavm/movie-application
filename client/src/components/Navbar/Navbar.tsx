import { Link } from "react-router-dom";
import FilmType from "../../utils/types/FilmType";
import ImageComponent from "../ImageComponent";
import "./Navbar.css";
function Navbar(props: {
  className?: string;
  films?: Array<FilmType>;
  onHandleDetailClick?: Function;
}) {

  return (
    <nav className={props.className}>
      <Link to="/">
        <ImageComponent className="logo" src="/src/assets/images/logo.png" />
      </Link>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
