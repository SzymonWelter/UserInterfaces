import React, { useEffect, useState } from 'react';
import {devicesPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createFormData } from "src/js/helpers";
import {contextService} from "src/js/services";
function DevicesPage(props){
    
    return (
        <PageTemplate
          title="Devices"
          addTitle='Add new device'
          name="devices"
          inputs={devicesPageModel}
          loading={false}
          error={''}
        />
      );
}
export default DevicesPage;