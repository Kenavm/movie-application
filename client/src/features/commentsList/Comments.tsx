import CommentType from "../../utils/types/CommentType";
import { Pagination } from "../filmList/pagination/Pagination";
import { useState , useEffect } from "react";
import { fetchComments } from "../../api/fetchComments";

function Comments(props: { id: string }) {
  const [comments, setComments] = useState<Array<CommentType>>([]);
  console.log(props.id)

  useEffect(() => {
    async function whatever() {
      const data = await fetchComments(props.id);
      const comments = await data.data;
      console.log(comments.length)
      setComments(comments);
    }
    whatever();
  }, []);

  console.log(comments)
  return (
    <div className="MovieComments">
      <h3>Comments</h3>
      {comments !== undefined ? comments.map((comment) => {
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
      }): ""}
    </div>
  );
}

export { Comments };
