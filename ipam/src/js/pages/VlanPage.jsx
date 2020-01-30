import React, { useState, useEffect } from "react";
import { vlanPageModel } from "src/js/models";
import PageTemplate from "./PageTemplate";
import { contextService } from "src/js/services";
function VlanPage(props) {
  return (
    <PageTemplate
      title="vlan"
      addTitle="Add new vlan"
      name="vlans"
      inputs={vlanPageModel}
      loading={false}
      error={""}
    />
  );
}
export default VlanPage;
