import { Filterbar } from "../../components/Filterbar";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import FilmType from "../../utils/types/FilmType";
import { FilmList } from "../../features/filmList/FilmList";
import { Pagination } from "../../features/pagination/Pagination";
import Container from "../../components/Container/Container";
import "./FilmsLayout.css";

function FilmsLayout(props: {
	films: Array<FilmType>;
	onHandleDetailClick: Function;
	onHandlePagination: Function;
	onHandleFilter: Function;
	onHandleInput: Function;
}) {
	return (
		<>
			<Container className="navbarFilmListContainer">
				<Navbar
				/>
				<Filterbar
					onHandleFilter={props.onHandleFilter}
					onHandleInput={props.onHandleInput}
				/>
				<FilmList
					films={props.films}
					onHandleDetailClick={props.onHandleDetailClick}
					type={"filmLayout"}
				/>
				<Pagination
					onHandlePagination={props.onHandlePagination} 
					totalPages={8}
				/>
			</Container>
			<Footer />
		</>
	);
}

export { FilmsLayout };
