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

  handleSubmitForm = e => {
    e.preventDefault(); // Prevent default behavior
    const errors = this.validate();
    this.setState({ errors });
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
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
