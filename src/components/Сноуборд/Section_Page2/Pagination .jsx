const Pagination = ({ currentPage, todosPerPage, totalTodos, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination">
         <button
              className='btn btn-outline-danger'
              onClick={goToPrevPage}
            >
              Prev
            </button>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              className={`page-link ${currentPage === number ? "active" : ""}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
         <button
              className='btn btn-outline-primary'
              onClick={goToNextPage}
            >
              Next
            </button>
      </ul>
    </nav>
  );
};
export default Pagination;
