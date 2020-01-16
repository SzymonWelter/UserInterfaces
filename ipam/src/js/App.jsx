import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import { history } from './helpers';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
