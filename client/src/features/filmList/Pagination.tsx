import FilmType from '../../utils/FilmType';

function Pagination(props: {
  movies: Array<FilmType>;
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  return (
    <div className="pagination">
      {props.movies.length === 0
        ? null
        : props.onGeneratePages().map((index: number) => {
            return (
              <button
                style={{ margin: 10 + "px" }}
                onClick={() => props.onHandlePagination(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
    </div>
  );
}

export { Pagination };
