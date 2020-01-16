import React from "react";
import Filter from "components/context/Filter";
import List from "components/context/List";
import Loading from "components/Loading";
import { useStore } from "stores";

function ContextApp(props) {
  const [{ loading}] = useStore();
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="app">
          <Filter></Filter>
          <List></List>
        </div>
      )}
    </div>
  );
}

export default ContextApp;
