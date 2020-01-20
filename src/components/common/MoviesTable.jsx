import React from "react";
import Movie from "../movie";

const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
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
};

export default MoviesTable;
