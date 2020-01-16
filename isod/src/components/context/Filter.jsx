import React from "react";
import { filterItems } from "actions/contextActions";
import { useStore } from "stores";

function Filter() {
  const [{ filter }, dispatch] = useStore();
  return (
    <div className="filter-wrapper">
      <label>Filter </label>
      <input onChange={e => dispatch(filterItems(e.target.value))} value={filter}/>
    </div>
  );
}

export default Filter;
