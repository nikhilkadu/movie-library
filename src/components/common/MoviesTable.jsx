import React, { Component } from "react";
import Movie from "../movie";

class MoviesTable extends Component {
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
    const { movies, onDelete, onLike } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.setSortColumn("title")}>Title</th>
            <th onClick={() => this.setSortColumn("genre.name")}>Genre</th>
            <th onClick={() => this.setSortColumn("numberInStock")}>Stock</th>
            <th onClick={() => this.setSortColumn("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <Movie
              key={movie._id}
              movie={movie}
              onDelete={() => onDelete(movie)}
              onLike={() => onLike(movie)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
