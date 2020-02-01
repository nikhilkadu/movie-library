import React, { Component } from "react";
import Like from "./Like";
import Table from "./Table";

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
