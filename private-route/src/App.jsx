import React, {Component} from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "helpers";
import {Home, SignIn, PrivateRoute} from 'components';
import {authenticationService} from 'services';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/signin");
  }

  render() {
    return (
      <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Route path="/signin" component={SignIn} />
          </Switch>
      </Router>
    );
  }
}
