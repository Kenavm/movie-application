import { Button } from "../../components/Button";
import "./Pagination.css";
import { generatePages } from "../../utils/functions/utilityFunctions";

function Pagination(props: {
  onHandlePagination: Function;
  totalPages: number;
}) {
  return (
    <div className="pagination">
      {generatePages(props.totalPages).map((index: number) => {
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
