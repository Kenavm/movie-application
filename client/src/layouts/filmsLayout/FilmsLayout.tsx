import { Filterbar } from "../../components/Filterbar";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import FilmType from "../../utils/types/FilmType";
import { FilmList } from "../../features/filmList/FilmList";
import { Pagination } from "../../features/filmList/pagination/Pagination";
import Container from "../../components/Container/Container";
import "./FilmsLayout.css";

function FilmsLayout(props: {
	films: Array<FilmType>;
	onHandleDetailClick: Function;
	onGeneratePages: Function;
	onHandlePagination: Function;
}) {
	return (
		<>
			<Container className="navbarFilmListContainer">
				<Navbar
					className={"navbar"}
					films={props.films}
					onHandleDetailClick={props.onHandleDetailClick}
				/>
				<Filterbar />
				<FilmList
					films={props.films}
					onHandleDetailClick={props.onHandleDetailClick}
					type={"filmLayout"}
				/>
				<Pagination
					onGeneratePages={props.onGeneratePages}
					onHandlePagination={props.onHandlePagination}
				/>
			</Container>
			<Footer text={"© 2023 by Cinema"}/>
		</>
	);
}

export { FilmsLayout };
