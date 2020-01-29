import React from "react";
import { Table, FormModal } from "src/js/components";
function PageTemplate(props) {
  return (
    <div className="page-wrapper page-wrapper--border-radius">
      <h2 className="page-header">{props.title}</h2>
      <button
        type="button"
        className="add-new"
        data-toggle="modal"
        data-target={`#${props.name}-form-modal`}
      >
        Add new
      </button>
      <Table data={data} />
      <FormModal
        addTitle={props.addTitle}
        name={props.name}
        inputs={props.inputs}
        onSubmit={props.onSubmit}
        loading={props.loading}
        error={props.error}
      />
    </div>
  );
}

const data = [
  {
    "#": 1,
    ip: "172.98.11.2",
    hostname: "hostname",
    mac: "mac",
    gateaway: "gateaway"
  }
];

export default PageTemplate;
