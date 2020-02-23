import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";

class Form extends Component {
  validate = () => {
    const { userInput } = this.state;
    const errors = {};

    const options = { abortEarly: false };
    const { error } = Joi.validate(userInput, this.schema, options);
    if (!error) return null;

    for (let errorObj of error.details)
      errors[errorObj.path[0]] = errorObj.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    let userInput = { [name]: value };
    let schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(userInput, schema);
    return error ? error.details[0].message : "";
  };

  handleSubmitForm = e => {
    e.preventDefault(); // Prevent default behavior
    const errors = this.validate() || {};
    this.setState({ errors });
    this.submitAction();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const userInput = { ...this.state.userInput };
    userInput[input.name] = input.value;

    this.setState({ userInput, errors });
  };

  renderInputField = (name, label, type = "text") => {
    const { userInput, errors } = this.state;
    return (
      <Input
        label={label}
        name={name}
        value={userInput[name]}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton = label => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };
}

export default Form;
