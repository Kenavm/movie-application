import { Button } from "../../../components/Button";
import "./Pagination.css";

function Pagination(props: {
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  return (
    <div className="pagination">
      {props.onGeneratePages().map((index: number) => {
        return (
          <Button
            onClick={() => props.onHandlePagination(index + 1)}
            text={(index + 1).toString()}
          />
        );
      })}
    </div>
  );
}

export { Pagination };
