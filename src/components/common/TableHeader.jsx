import React, { Component } from "react";

class TableHeader extends Component {
  setSortColumn = clickedColumn => {
    const { sortColumn, onSort } = this.props;
    if (!clickedColumn) return null;
    if (sortColumn.id === clickedColumn) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.id = clickedColumn;
    }
    onSort(sortColumn);
  };

  showSortIcon(column) {
    const { sortColumn } = this.props;
    if (column.id !== sortColumn.id) return null;
    if (sortColumn.order === "desc")
      return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
    return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className={column.label ? "clickable" : ""}
              key={column.id || column.key}
              onClick={() => this.setSortColumn(column.id)}
            >
              {column.label} {this.showSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
