import React, { Component } from "react";
import { authenticationService } from "services";
export class SignIn extends Component {
  constructor(props) {
    super(props);
    if (authenticationService.currentUserValue.user) {
      this.props.history.push("/");
    }
    this.state = {}

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const result = authenticationService.login(
      form.username.value,
      form.password.value
    );
    if (result.authenticated) {
      const { from } = this.props.location.state || {
        from: { pathname: "/" }
      };
      this.props.history.push(from);
    }
    else{
      this.setState({
        error: 'Wrong login or password'
      });
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          placeholder="username"
          name="username"
          className="form__text-input"
        />
        <input
          placeholder="password"
          name="password"
          className="form__text-input"
          type="password"
        />
        <input type="submit" value="Log in" />
    {this.state.error && <label>{this.state.error}</label>}
      </form>
    );
  }
}
