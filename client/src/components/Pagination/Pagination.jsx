import React from "react";

export default function Pagination({
  pokesPerPage,
  allPokes,
  pagination,
  prevPage,
  nextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokes / pokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers?.map((number) => (
          <button
            className="number"
            key={number}
            onClick={() => pagination(number)}> {number}
          </button>
        ))}
      </ul>
      <button className="backButton" onClick={prevPage}>Back</button>
      <button className="advanceButton" onClick={nextPage}>Next</button>
    </nav>
  );
}
