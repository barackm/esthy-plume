import React from "react";
import _ from "lodash";
export default function ({ pageCount, pageItems, currentPage, onPageChange }) {
  const pagesNumber = Math.ceil(pageItems.length / pageCount);
  const pages = _.range(1, pagesNumber + 1);
  if (pages.length === 1) return null;
  return (
    <div>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-link active" : "page-link"}
            style={{ cursor: "pointer" }}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}
