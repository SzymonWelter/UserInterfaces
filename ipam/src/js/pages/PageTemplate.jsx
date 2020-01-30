import React, {useState, useEffect} from "react";
import { Table, FormModal } from "src/js/components";
import {contextService} from 'src/js/services';
import {createData} from 'src/js/helpers';
function PageTemplate(props) {
  const [state, setState] = useState([]);
  useEffect(()=>{
      get(props.name).then(snapshot => {
          const data = [];
          snapshot.forEach(d => {data.push(d.val())});
          setState({data: data});
      })
  },[]);
  return (
    <div className="page-wrapper page-wrapper--border-radius">
      <h2 className="page-header">{props.title}</h2>
      <button
        type="button"
        className="add-new"
        data-toggle="modal"
        data-target={`#${props.name}-form-modal`}
      >
        Add new
      </button>
      <Table data={state.data} />
      <FormModal
        addTitle={props.addTitle}
        name={props.name}
        inputs={props.inputs}
        onSubmit={e => onSubmit(e,props.name,props.inputs)}
        loading={props.loading}
        error={props.error}
      />
    </div>
  );
}

function onSubmit(form, name, inputs){
  const data = createData(form,inputs);
  contextService.add(name, data).then(() => {
      location.reload();
  });
}
function get(name){
    return contextService.get(name);
}

export default PageTemplate;
