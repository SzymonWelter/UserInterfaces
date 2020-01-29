import React from 'react';

function TableRow(props) {
    return (<tr>
        {Object.keys(props.data).map((k,i) => (
          <td key={i}>{props.data[k]}</td>
        ))}
      </tr>
    );
  }
  export default TableRow;