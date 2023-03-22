import FilmType from "../utils/types/FilmType";
import { MainLayout } from "../features/layouts/MainLayout";
import Container from "../components/Container/Container";

function HomePage(props: {
  films: Array<FilmType>;
  onHandleDetailClick: Function;
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  return (
    <Container className="App">
      <MainLayout
        films={props.films}
        onHandleDetailClick={props.onHandleDetailClick}
        onGeneratePages={props.onGeneratePages}
        onHandlePagination={props.onHandlePagination}
      ></MainLayout>
    </Container>
  );
}

export { HomePage };
