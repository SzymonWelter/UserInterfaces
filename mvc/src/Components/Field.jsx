import React from 'react';
import { fieldController } from 'Controllers'

export function Field(props) {
    const readOnly =  fieldController.isReadonly(props);
    const colorForVariance = fieldController.getColorForVariance(props);

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
              color: colorForVariance
            }}
          />
        </span>
      </li>
    );
  }