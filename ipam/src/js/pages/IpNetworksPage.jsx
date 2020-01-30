import React, {useState, useEffect} from 'react';
import {ipNetworksPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createData } from "src/js/helpers";
import {contextService} from "src/js/services";
function IpNetworksPage(props){
    return (
        <PageTemplate
          title="Ip networks"
          addTitle='Add ip network'
          name="ips"
          inputs={ipNetworksPageModel}
          loading={false}
          error={''}
        />
      );
}
export default IpNetworksPage;