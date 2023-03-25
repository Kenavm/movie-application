import FilmType from "../../utils/types/FilmType";
import {  HomeLayout } from "../../layouts/homeLayout/HomeLayout";


function HomePage(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onHandlePagination: Function;
}) {
  return (
    <HomeLayout
      films={props.films}
      onHandleDetailClick={props.onHandleDetailClick}
      onHandlePagination={props.onHandlePagination}
    ></HomeLayout>
  );
}

export { HomePage };
