import React, { Component } from "react";
import Like from "./Like";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import _ from "lodash";

class MoviesTable extends Component {
  columns = [
    { id: "title", label: "Title" },
    { id: "genre.name", label: "Genre" },
    { id: "numberInStock", label: "Stock" },
    { id: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like movie={movie} onLike={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  extractCells() {
    return this.props.movies.map(movie =>
      this.columns.map(column => {
        if (column.content) return column.content(movie);
        return _.get(movie, column.id);
      })
    );
  }
  render() {
    const { sortColumn, onSort } = this.props;
    const cells = this.extractCells();
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody cells={cells} />
      </table>
    );
  }
}

export default MoviesTable;
