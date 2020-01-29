import React from 'react';
import {ipNetworksPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createFormData } from "src/js/helpers";
import {requestsService} from "src/js/services";
function IpNetworksPage(props){
    return (
        <PageTemplate
          title="Ip networks"
          addTitle='Add ip network'
          name="ip"
          inputs={ipNetworksPageModel}
          onSubmit={addIpNetwork}
          loading={false}
          error={''}
        />
      );
}
function addIpNetwork(form){
    const formData = createFormData(form, ipNetworksPageModel);
    requestsService.post('ip',formData);
}
export default IpNetworksPage;