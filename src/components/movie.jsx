import React, { Component } from "react";
import Like from "./common/Like";
class Movie extends Component {
  render() {
    const { movie, onDelete, onLike } = this.props;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like movie={movie} onLike={() => onLike(movie)} />
        </td>
        <td>
          <button
            onClick={() => onDelete(this.props.movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
