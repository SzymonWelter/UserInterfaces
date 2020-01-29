import React from "react";
import { Route } from "react-router-dom";
import PageTemplate from "./PageTemplate";

const Home = props => {
  return (
    <div className="container-center">
      <Route exact path="/" render={() => <PageTemplate title='Home'/>} />
      <Route exact path="/devices" render={() => <PageTemplate title='Devices' />} />
      <Route exact path="/vlan" render={() => <PageTemplate title='vlan networks' />} />
      <Route exact path="/ip" render={() => <PageTemplate title='ip networks' />} />
      <Route exact path="/nat" render={() => <PageTemplate title='nat' />} />
      <Route exact path="/locations" render={() => <PageTemplate title='locations' />} />
    </div>
  );
};

export default Home;
