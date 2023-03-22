function Pagination(props: {
  onGeneratePages: Function;
  onHandlePagination: Function;
}) {
  return (
    <div className="pagination">
      {props.onGeneratePages().map((index: number) => {
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
