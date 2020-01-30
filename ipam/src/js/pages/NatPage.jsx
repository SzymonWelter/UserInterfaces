import React, {useState, useEffect} from 'react';
import {natPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createFormData } from "src/js/helpers";
import {contextService} from "src/js/services";
function NatPage(props){

    return (
        <PageTemplate
          title="NAT"
          addTitle='Add NAT'
          name="nats"
          inputs={natPageModel}
          loading={false}
          error={''}
        />
      );
}
export default NatPage;