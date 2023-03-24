import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Span from "../../components/Span";
import ImageComponent from "../../components/ImageComponent";
import "./FilmPage.css";
import Container from "../../components/Container/Container";
import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router";
import { Comments } from "../../features/commentsList/Comments";
import CommentType from "../../utils/types/CommentType";
import { fetchComments } from "../../api/fetchComments";
import { generatePages } from "../../utils/functions/utilityFunctions";
import { Pagination } from "../../features/filmList/pagination/Pagination";

function FilmPage(props: {
  id: string;
  title: string;
  plot: string;
  poster: string;
  genres: Array<string>;
  runtime: number;
  year: number;
  imdb: {
    rating: number;
    votes: number;
  };
}) {
  const [comments, setComments] = useState<Array<CommentType>>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [imageError, setImageError] = useState(false);
  const history = useNavigate();

  const handleImageError = () => {
    setImageError(true);
  };

  function handlePagination(buttonIndex: number) {
		setPage(buttonIndex);
	}

  useEffect(() => {
    async function loadComments() {
      const data = await fetchComments(props.id, page);
      const comments = data.comments;
      const totalPages = data.totalPages;
      console.log(comments)
      setTotalPages(totalPages);
      setComments(comments);
    }
    loadComments();
  }, [page]);

  return (
    <>
      {" "}
      <Navbar className={"navbar"} />
      <Container className="detailViewContainer">
        <Container className="title">
          <Header heading={props.title} />
        </Container>
        <Button text="Go Back" onClick={() => history(-1)}></Button>
        <Container className="body">
          <ImageComponent
            className="image"
            src={
              imageError ? "/src/assets/images/notAvailable.jpg" : props.poster
            }
            onError={handleImageError}
          />
          <Container>
            <Paragraph content={`Year: ${props.year}`} />
            <Paragraph content={`Runtime: ${props.runtime}`} />
            <Span
              className="genres"
              content={`Genres: ${props.genres.join(", ")}`}
            ></Span>
            <Paragraph content={`Imdb rating: ${props.imdb.rating}`} />
            <Paragraph content={props.plot} />
          </Container>
          <Comments id={props.id} comments={comments} />
          {comments.length >= 10 && <Pagination onGeneratePages={generatePages} onHandlePagination={handlePagination} />}
        </Container>
      </Container>
      <Container className="footer"></Container>
    </>
  );
}

export { FilmPage };
