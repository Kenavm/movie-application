import { Button } from "../../../components/Button";
import "./Pagination.css";

function Pagination(props: {
  onGeneratePages: Function;
  onHandlePagination: Function;
  totalPages?: number;
}) {
  return (
    <div className="pagination">
      {props.onGeneratePages(8).map((index: number) => {
        return (
          <Button key={index}
            onClick={() => props.onHandlePagination(index + 1)}
            text={(index + 1).toString()}
          />
        );
      })}
    </div>
  );
}

export { Pagination };
