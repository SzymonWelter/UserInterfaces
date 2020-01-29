import React from 'react';
import {natPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createFormData } from "src/js/helpers";
import {requestsService} from "src/js/services";
function NatPage(props){
    return (
        <PageTemplate
          title="NAT"
          addTitle='Add NAT'
          name="nat"
          inputs={natPageModel}
          onSubmit={addNat}
          loading={false}
          error={''}
        />
      );
}
function addNat(form){  
  const formData = createFormData(form, natPageModel);
  requestsService.post('nat',formData);
}
export default NatPage;