import { FilmsLayout } from "../../layouts/filmsLayout/FilmsLayout";
import FilmType from "../../utils/types/FilmType";

function Films(props: {
	films: Array<FilmType>;
	onHandleDetailClick: Function;
	onGeneratePages: Function;
	onHandlePagination: Function;
	onHandleFilter: Function;
	onHandleInput: Function;
}) {
	return (
		<FilmsLayout
			films={props.films}
			onHandleDetailClick={props.onHandleDetailClick}
			onGeneratePages={props.onGeneratePages}
			onHandlePagination={props.onHandlePagination}
			onHandleFilter={props.onHandleFilter}
			onHandleInput={props.onHandleInput}
		/>
	);
}

export { Films };
