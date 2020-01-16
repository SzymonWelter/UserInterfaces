import React from "react";
import { connect } from "react-redux";
import { filterItems } from "actions/reduxActions";
function Filter(props) {
  return (
    <div className="filter-wrapper">
        <label>Filter </label>
      <input onChange={e => props.filterItems(e.target.value)} />
    </div>
  );
}

export default connect(null, { filterItems })(Filter);
