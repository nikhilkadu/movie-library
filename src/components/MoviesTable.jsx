import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/Table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      id: "title",
      label: "Title",
      renderCell: movie => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      )
    },
    { id: "genre.name", label: "Genre" },
    { id: "numberInStock", label: "Stock" },
    { id: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      renderCell: movie => (
        <Like movie={movie} onLike={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      renderCell: movie => (
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
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
