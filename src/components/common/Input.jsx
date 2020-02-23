import React from "react";

const Input = ({ name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input className="form-control" id={name} name={name} {...rest} />
      {rest.error && <div className="alert alert-danger">{rest.error}</div>}
    </div>
  );
};

export default Input;
