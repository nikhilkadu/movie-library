import React, { Component } from "react";

class TableHeader extends Component {
  setSortColumn = clickedColumn => {
    const { sortColumn, onSort } = this.props;
    if (sortColumn.id === clickedColumn) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.id = clickedColumn;
    }
    onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.id || column.key}
              onClick={() => this.setSortColumn(column.id)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
