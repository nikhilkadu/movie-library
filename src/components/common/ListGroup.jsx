import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({ items, selectedItem, onFilterChanged }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onFilterChanged(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  onFilterChanged: PropTypes.func.isRequired
};

export default ListGroup;
