import React from "react";
import { Route } from "react-router-dom";
import DevicesPage from "./DevicesPage";
import VlanPage from "./VlanPage";
import IpNetworksPage from "./IpNetworksPage";
import NatPage from "./NatPage";
import LocationsPage from "./LocationsPage";
import HomePage from './HomePage';
const Home = props => {
  return (
    <div className="container-center">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/devices" component={DevicesPage} />
      <Route exact path="/vlan" component={VlanPage} />
      <Route exact path="/ip" component={IpNetworksPage} />
      <Route exact path="/nat" component={NatPage} />
      <Route exact path="/locations" component={LocationsPage} />
    </div>
  );
};

export default Home;
