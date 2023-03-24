import CommentType from "../../utils/types/CommentType";
import Span from "../../components/Span";
import Container from "../../components/Container/Container";
import "./Comments.css";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";

function Comments(props: { id: string; comments?: Array<CommentType> }) {
  return (
    <div className="MovieComments">
      <Header className={"header"} heading="Comments"></Header>
      {props.comments !== undefined
        ? props.comments.map((comment) => {
            return (
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
            );
          })
        : ""}
    </div>
  );
}

export { Comments };
