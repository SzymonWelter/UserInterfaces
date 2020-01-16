import React from "react";

function Element(props) {
  return (
    <div className="list-element">
      <h3 className="list-element__title">{props.title}</h3>
      <div>
        <span className="list-element__desc">Supervisor</span>:{" "}
        {props.supervisor}
      </div>
      <div>
        <span className="list-element__desc">Organisation unit</span>:{" "}
        {props.orgUnit}
      </div>
    </div>
  );
}

export default Element;
