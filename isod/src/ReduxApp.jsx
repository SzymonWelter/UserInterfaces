import React from "react";
import Filter from "./components/redux/Filter";
import List from "./components/redux/List";
import Loading from "./components/Loading";
import { connect } from "react-redux";

function ReduxApp(props) {
  return (
    <div>
      {props.loading ? (
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

const mapStateToProps = state => ({
  loading: state.isod.loading
});

export default connect(mapStateToProps)(ReduxApp);
