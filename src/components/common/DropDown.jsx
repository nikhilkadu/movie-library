import React from "react";

const Input = ({ name, label, options, error, ...rest }) => {
  console.log("Rest", rest);
  console.log("options", options);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" id={name} name={name} {...rest}>
        <option key="" value=""></option>
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
