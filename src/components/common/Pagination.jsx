import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageClick }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = _.range(1, totalPages + 1);

  if (totalPages === 1) return null;

  return (
    <nav>
      <ul className="pagination pagination-lg">
        {pages.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageClick(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired
};

export default Pagination;
