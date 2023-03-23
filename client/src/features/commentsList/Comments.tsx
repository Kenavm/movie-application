import CommentType from "../../utils/types/CommentType";
import { Pagination } from "../filmList/pagination/Pagination";
import { useState , useEffect } from "react";
import { fetchComments } from "../../api/fetchComments";

function Comments(props: { id: string }) {
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [comments, setComments] = useState<Array<CommentType>>([]);

  useEffect(() => {
    async function pagination() {
      const data = await fetchComments(page, props.id);
      const comments = await data.comments;

      console.log(comments)

      const totalPages = data.totalPages;
      setComments(comments);
      setTotalPages(totalPages);
    }
    pagination();
  }, [page]);

  function handlePagination(buttonIndex: number) {
    setPage(buttonIndex);
  }
  function generatePages() {
    const pagesLength = [];
    for (let i = 0; i < totalPages; i++) {
      pagesLength.push(i);
    }
    return pagesLength;
  }
  console.log(props.id)

  return (
    <div className="MovieComments">
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div className="MovieComments-movieComment">
            <div>
              <b>{comment.name}</b>
            </div>
            <div>{comment.email}</div>
            <div>{comment.date}</div>
            <br></br>
            <div>{comment.text}</div>
          </div>
        );
      })}
      <Pagination
        onGeneratePages={generatePages}
        onHandlePagination={handlePagination}
      />
    </div>
  );
}

export { Comments };
