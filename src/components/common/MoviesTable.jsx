import React, { Component } from "react";
import Like from "./Like";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class MoviesTable extends Component {
  columns = [
    { id: "title", label: "Title" },
    { id: "genre.name", label: "Genre" },
    { id: "numberInStock", label: "Stock" },
    { id: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      getChildElement: movie => (
        <Like movie={movie} onLike={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      getChildElement: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody items={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
