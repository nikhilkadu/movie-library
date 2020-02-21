import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };
  username = React.createRef();

  handleSubmitForm(e) {
    e.preventDefault(); // Prevent default behavior
    if (this.username)
      console.log("Form Submitted by ", this.username.current.value);
  }

  handleChange({ currentTarget: input }) {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log(account);
    this.setState({ account });
  }

  render() {
    const { account } = this.state;
    return (
      <div>
        <form onSubmit={e => this.handleSubmitForm(e)}>
          <div className="form-group">
            <label htmlFor="login">Username</label>
            <input
              autoFocus
              ref={this.username}
              className="form-control"
              type="email"
              id="login"
              onChange={e => this.handleChange(e)}
              name="username"
              value={account.username}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input
              className="form-control"
              type="password"
              id="pass"
              onChange={e => this.handleChange(e)}
              name="password"
              value={account.password}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
