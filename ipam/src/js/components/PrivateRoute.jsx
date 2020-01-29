import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!rest.user) {
        return <Redirect to="/signin" />;
      }
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => ({
  user: state.user.id
});

export default connect(mapStateToProps)(PrivateRoute);
