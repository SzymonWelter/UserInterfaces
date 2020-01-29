import React from 'react';
import {devicesPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createFormData } from "src/js/helpers";
import {requestsService} from "src/js/services";
function DevicesPage(props){
    return (
        <PageTemplate
          title="Devices"
          addTitle='Add new device'
          name="device"
          inputs={devicesPageModel}
          onSubmit={addDevice}
          loading={false}
          error={''}
        />
      );
}
function addDevice(form){
    const formData = createFormData(form, devicesPageModel);
    requestsService.post('device',formData);
}

function getDevices(){

}
export default DevicesPage;