import CommentType from "../../utils/types/CommentType";
import Span from "../../components/Span";
import Container from "../../components/Container/Container";
import "./Comments.css";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import { Pagination } from "../pagination/Pagination";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

function Comments(props: {
  id?: string;
  comments?: Array<CommentType>;
  onHandlePagination: Function;
}) {
  return (
    <div className="MovieComments">
      <Navbar />
      <Header className={"header"} heading="Comments"></Header>
      {props.comments !== undefined
        ? props.comments.map((comment) => {
            return (
              <>
                <Container className="comments">
                  <Paragraph
                    className={"content"}
                    content={comment.name}
                  ></Paragraph>

                  <Paragraph
                    className={"content"}
                    content={comment.email}
                  ></Paragraph>

                  <Paragraph
                    className={"content"}
                    content={comment.date.substring(0, 10)}
                  ></Paragraph>

                  <Span className={"text"} content={comment.text}></Span>
                  <Span
                    className={"content"}
                    content={
                      "______________________________________________________"
                    }
                  ></Span>
                </Container>
              </>
            );
          })
        : ""}
      <Pagination
        onHandlePagination={props.onHandlePagination}
        totalPages={15}
      />
      <Footer />
    </div>
  );
}

export { Comments };
