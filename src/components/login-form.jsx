import React, { Component } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {
      username: "",
      password: ""
    }
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  validate = () => {
    const { account } = this.state;
    const errors = {};

    const options = { abortEarly: false };
    const { error } = Joi.validate(account, this.schema, options);
    if (!error) return {};

    for (let errorObj of error.details)
      errors[errorObj.path[0]] = errorObj.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    let account = { [name]: value };
    let schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(account, schema);
    return error ? error.details[0].message : "";
  };

  handleSubmitForm = e => {
    e.preventDefault(); // Prevent default behavior
    const errors = this.validate();
    this.setState({ errors });
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <Input
            label="Username"
            name="username"
            value={account.username}
            type="text"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            type="password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button
            disabled={Object.keys(this.validate()).length}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
