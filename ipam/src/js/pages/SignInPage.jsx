import React from "react";
import { Form } from "src/js/components";
import { connect } from "react-redux";
import { signInFormModel } from "src/js/models";
import { userActions } from "src/js/actions";

function SignInPage(props) {
  return (
    <div className="container-center">
      <div className="form-wrapper form-wrapper--light form-wrapper--shadowed">
        <Form
          title="Sign in"
          inputs={signInFormModel}
          onSubmit={props.signIn}
          loading={props.loading}
          error={props.error}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error
});

export default connect(mapStateToProps, { signIn: userActions.signIn })(SignInPage);
