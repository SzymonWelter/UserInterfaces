import React, {useState, useEffect} from 'react';
import {locationsPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createFormData } from "src/js/helpers";
import {contextService} from "src/js/services";
function LocationsPage(props){
    return (
        <PageTemplate
          title="Locations"
          addTitle='Add location'
          name="locations"
          inputs={locationsPageModel}
          loading={false}
          error={''}
        />
      );
}


export default LocationsPage;