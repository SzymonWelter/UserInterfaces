import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "src/js/actions";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (rest.user) {
        return (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        );
      }
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => ({
  user: state.user.id
});

export default connect(mapStateToProps, {signOut: userActions.signOut})(PublicRoute);