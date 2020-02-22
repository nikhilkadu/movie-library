import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {
      username: "",
      password: ""
    }
  };

  validate = () => {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username" && value.trim() === "")
      return "Username is required";
    if (name === "password" && value.trim() === "")
      return "Password is required";
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
