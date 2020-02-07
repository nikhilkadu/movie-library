import React from "react";

const Like = ({ movie, onLike }) => {
  let classes = "fa fa-heart";
  if (!movie.like) {
    classes += "-o";
  }
  return (
    <i
      onClick={() => onLike(movie)}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
