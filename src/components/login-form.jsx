import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    userInput: { username: "", password: "" },
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

  submitAction = () => {
    console.log("Form submitted", this.state.userInput);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          {this.renderInputField("username", "Username")}
          {this.renderInputField("password", "Password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
