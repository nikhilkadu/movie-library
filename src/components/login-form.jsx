import React from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    inputFields: { username: "", password: "" },
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
    console.log("Form submitted", this.state.inputFields);
  };

  render() {
    const { inputFields, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <Input
            label="Username"
            name="username"
            value={inputFields.username}
            type="text"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            label="Password"
            name="password"
            value={inputFields.password}
            type="password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button
            disabled={this.validate()}
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
