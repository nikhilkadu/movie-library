import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.movie.like) {
    classes += "-o";
  }
  return (
    <i
      onClick={() => props.onLike(props.movie)}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
