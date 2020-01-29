import React from 'react';

function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.headers.map((h,i) => (
          <th key={i}>{h}</th>
        ))}
      </tr>
    </thead>
  );
}
export default TableHead;
