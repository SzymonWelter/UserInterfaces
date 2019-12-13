import React from 'react';

export function Field(props) {
    console.log(props.colorForVariance);
    var readOnly = "editable" in props ? false : true;
    return (
      <li>
        <span>{props.label}</span>
        <span>
          <input
            id={props.id}
            type="text"
            readOnly={readOnly}
            value={props.value}
            onChange={props.onChangeValue}
            style={{
              color: props.colorForVariance ? props.colorForVariance() : "black"
            }}
          />
        </span>
      </li>
    );
  }