import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    userInput: {
      username: "",
      password: "",
      name: ""
    },
    errors: {
      username: "",
      password: "",
      name: ""
    }
  };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  submitAction = () => {
    console.log("Form submitted", this.state.userInput);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          {this.renderInputField("username", "Username", "email")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderInputField("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
