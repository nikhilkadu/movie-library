import { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  validate = () => {
    const { inputFields } = this.state;
    const errors = {};

    const options = { abortEarly: false };
    const { error } = Joi.validate(inputFields, this.schema, options);
    if (!error) return null;

    for (let errorObj of error.details)
      errors[errorObj.path[0]] = errorObj.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    let inputFields = { [name]: value };
    let schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(inputFields, schema);
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

    const inputFields = { ...this.state.inputFields };
    inputFields[input.name] = input.value;

    this.setState({ inputFields, errors });
  };
}

export default Form;
