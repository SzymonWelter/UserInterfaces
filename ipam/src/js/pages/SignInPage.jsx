import React from "react";
import { Form } from "src/js/components";
import { connect } from "react-redux";
import { userActions } from "src/js/actions";

function SignInPage(props) {
  return (
    <div className="form-wrapper form-wrapper--light form-wrapper--shadowed">
      <Form title="Sign in" inputs={inputs} onSubmit={props.signingIn} loading={props.loading} error={props.error}/>
    </div>
  );
}

const inputs = [
  { name: "username", title: "username", type: "text", class: "" },
  { name: "password", title: "password", type: "password", class: "" },
  {
    name: "submit",
    type: "submit",
    class: "form-input--submit",
    value: "Sign in"
  }
];

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error
});

export default connect(mapStateToProps, userActions)(SignInPage);
