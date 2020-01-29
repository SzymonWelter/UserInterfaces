import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { SignInPage, Home } from './pages';
import { history } from './helpers';
import { PrivateRoute, PublicRoute, Navbar, SignOut } from 'src/js/components';
import {connect} from 'react-redux';

function App(props) {
  return (
    <Router history={history}>
      {props.user && <Navbar />}
      <Switch>
        <PublicRoute path='/signin' component={SignInPage} />
        <Route path='/signout' component={SignOut} />
        <PrivateRoute path='/' component={Home} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user.id
});

export default connect(mapStateToProps)(App);
