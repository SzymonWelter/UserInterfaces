import React from "react";
import { vlanPageModel } from "src/js/models";
import PageTemplate from "./PageTemplate";
import { createFormData } from "src/js/helpers";
import { requestsService } from "src/js/services";
function VlanPage(props) {
  return (
    <PageTemplate
      title="vlan"
      addTitle="Add new vlan"
      name="vlan"
      inputs={vlanPageModel}
      onSubmit={addVlan}
      loading={false}
      error={""}
    />
  );
}
function addVlan(form) {
  const formData = createFormData(form, vlanPageModel);
  requestsService.post("vlan", formData);
}
export default VlanPage;
