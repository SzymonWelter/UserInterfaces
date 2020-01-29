import React from "react";
import Form from "./Form";
function FormModal(props) {
  return (
    <div
      className="modal fade"
      id={`${props.name}-form-modal`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`${props.name}-form-modal-title`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${props.name}-form-modal-title`}>
              {props.addTitle}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body container-center">
            <Form
              className="form-center"
              inputs={props.inputs}
              onSubmit={props.onSubmit}
              loading={props.loading}
              error={props.error}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
