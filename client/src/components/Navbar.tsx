import { Link } from "react-router-dom";
import FilmType from "../utils/types/FilmType";
import './Navbar.css'
function Navbar(props: {className:string, films: Array<FilmType>, onHandleDetailClick: Function}) {

  const filmProps = {
    onHandleDetailClick: props.onHandleDetailClick,
    films: props.films
  }
  
  return (
    <nav className={props.className}>
      <Link to="/">
        <img className="image" src="./src/assets/images/logo.png" alt="logo" />
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
