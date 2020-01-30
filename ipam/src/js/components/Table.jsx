import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

function Table(props) {
  return (
    <div>
      {props.data && (
        <table className="table table-striped table-bordered table-hover">
          <TableHead headers={Object.keys(props.data[0] ? props.data[0] : {})} />
          <tbody>
            {props.data.map((e, i) => (
              <TableRow key={i} data={e} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Table;
