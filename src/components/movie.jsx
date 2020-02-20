import React from "react";

const Movie = props => {
  return (
    <div>
      <h1>Movie ID: {props.match.params.id}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default Movie;
