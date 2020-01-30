import React, { Component } from "react";
import Movie from "../movie";
import TableHeader from "./TableHeader";

class MoviesTable extends Component {
  columns = [
    { id: "title", label: "Title" },
    { id: "genre.name", label: "Genre" },
    { id: "numberInStock", label: "Stock" },
    { id: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];
  render() {
    const { movies, sortColumn, onDelete, onLike, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
