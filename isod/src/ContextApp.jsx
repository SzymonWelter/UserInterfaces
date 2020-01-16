import React from "react";
import Filter from "components/context/Filter";
import List from 'components/context/List';

function ContextApp(props) {
  return (
    <div className="app">
      <Filter></Filter>
      <List></List>
    </div>
  );
}

export default ContextApp;
