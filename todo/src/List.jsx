import React from "react";

function List(props) {
  return (
    <div className="list-wrapper">
      <h2>{props.name}</h2>
      <ul className="list">
        {props.data.map((e, id) => (
          <li className="list__element" key={id}>
            <input
              type="checkbox"
              id={e.id}
              onChange={props.checkHandler}
              checked={props.checked ? true : false}
            />
            {e.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
