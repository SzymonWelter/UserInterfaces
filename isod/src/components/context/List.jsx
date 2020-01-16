import React, { useEffect } from "react";
import { fetchItems } from "actions/contextActions";
import Element from "./Element";
import { useStore } from "stores";

function List(props) {
  const [{ items }, dispatch] = useStore();

  useEffect(() => {
    if (!items) {
      fetch(
        "https://isod.ee.pw.edu.pl/isod-portal/wapi?q=dissertations_graduated"
      )
        .then(res => res.json())
        .then(items => {
          dispatch(fetchItems(items.list));
        });
    }
  });
  
  return (
    <ul>
      {items &&
        items.map((v, i) => (
          <li key={i}>
            <Element
              title={v.title}
              supervisor={`${v.supervisor_firstname} ${v.supervisor_lastname}`}
              orgUnit={v.orgUnitFull}
            />
          </li>
        ))}
    </ul>
  );
}

export default List;
