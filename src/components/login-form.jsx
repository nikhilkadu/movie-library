import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleSubmitForm = e => {
    e.preventDefault(); // Prevent default behavior
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log(account);
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <Input
            label="Username"
            name="username"
            value={account.username}
            type="text"
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            type="password"
            onChange={this.handleChange}
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
