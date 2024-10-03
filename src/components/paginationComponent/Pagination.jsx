import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Pagination = ({
  paginationNumber,
  handlePagination,
  currentPage,
  nextPage,
  previousPage,
  totalPages,
}) => {
  return (
    <div className="flex gap-2 justify-end mt-5 mb-10 px-10">
      <button className="bttn pl-2" onClick={previousPage}>
        <FaAngleLeft />
      </button>
      <div className="flex gap-3">
        {paginationNumber.map((pageNumber, index) => (
          <button
            key={index}
            className={`bttn ${pageNumber === currentPage ? "active" : ""}`}
            onClick={() => handlePagination(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="bttn pl-2"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
