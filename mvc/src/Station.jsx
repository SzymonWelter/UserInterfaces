import React from 'react';
import {Field} from './Field';

export function Station(props) {
    let s = props.station;
    return (
      <div>
        {s === undefined ? (
          <div>Wybierz stację.</div>
        ) : (
          <form>
            <ul>
              <Field label="Identyfikator" value={s.name} />
              <Field label="Data" value={s.date} />
              <Field label="Oczekiwana" value={s.expected} />
              <Field
                label="Wartość"
                onChangeValue={e => {
                  props.onChangeValue(s, e);
                }}
                value={s.value}
                editable
              />
              <Field
                id="input-expected"
                label="Różnica"
                value={s.value - s.expected}
                colorForVariance={props.colorForVariance}
              />
            </ul>
          </form>
        )}
      </div>
    );
  }