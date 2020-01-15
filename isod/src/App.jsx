import React from "react";
import Filter from './components/Filter';
import List from './components/List';
import Loading from './components/Loading';
import { connect } from "react-redux";

function App(props) {
  return (
    <div className='row'>
      <div className="col">
      {props.loading ? (
        <Loading></Loading>
      ) : (
        <div className='app'>
          <Filter></Filter>
          <List></List>
        </div>
      )}
      </div>
      <div className="col">
        
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.isod.loading
});

export default connect(mapStateToProps)(App);
