import FilmType from "../utils/types/FilmType";
import { MainLayout } from "../features/layouts/MainLayout";

function HomePage(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  return (
    <div className="App">
      <MainLayout
        films={props.films}
        onHandleDetailClick={props.onHandleDetailClick}
        onGeneratePages={props.onGeneratePages}
        onHandlePagination={props.onHandlePagination}
      ></MainLayout>
    </div>
  );
}

export { HomePage };
