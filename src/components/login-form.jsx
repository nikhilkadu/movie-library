import React, { Component } from "react";

class LoginForm extends Component {
  state = {};
  username = React.createRef();

  handleSubmitForm(e) {
    e.preventDefault(); // Prevent default behavior
    if (this.username)
      console.log("Form Submitted by ", this.username.current.value);
  }

  componentDidMount() {
    this.username.current.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmitForm(e)}>
          <div className="form-group">
            <label htmlFor="login">Username</label>
            <input
              ref={this.username}
              className="form-control"
              type="text"
              id="login"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input className="form-control" type="text" id="pass" />
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
