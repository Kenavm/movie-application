import FilmType from "../../utils/types/FilmType";
import { MainLayout } from "../../layouts/HomeLayout";


function HomePage(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  return (
    <MainLayout
      films={props.films}
      onHandleDetailClick={props.onHandleDetailClick}
      onGeneratePages={props.onGeneratePages}
      onHandlePagination={props.onHandlePagination}
    ></MainLayout>
  );
}

export { HomePage };
