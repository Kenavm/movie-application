import { FilmsLayout } from "../../layouts/filmsLayout/FilmsLayout";
import FilmType from "../../utils/types/FilmType";

function Films(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onHandlePagination: Function;
}) {
  return (
    <FilmsLayout
      films={props.films}
      onHandleDetailClick={props.onHandleDetailClick}
      onHandlePagination={props.onHandlePagination}
    />
  );
}

export { Films };
