import React from "react";

const Input = ({ name, value, label, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="login">{label}</label>
      <input
        className="form-control"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
