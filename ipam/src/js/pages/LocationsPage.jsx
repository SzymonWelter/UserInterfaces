import React from 'react';
import {locationsPageModel} from 'src/js/models';
import PageTemplate from './PageTemplate';
import { createFormData } from "src/js/helpers";
import {requestsService} from "src/js/services";
function LocationsPage(props){
    return (
        <PageTemplate
          title="Locations"
          addTitle='Add location'
          name="location"
          inputs={locationsPageModel}
          onSubmit={addLocation}
          loading={false}
          error={''}
        />
      );
}
function addLocation(form){
  const formData = createFormData(form, locationsPageModel);
  requestsService.post('location',formData);
}
export default LocationsPage;