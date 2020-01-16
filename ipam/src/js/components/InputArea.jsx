import React from 'react';
function InputArea(props){
    return(<div className='input-area'>
    <label className='form-input__name'>{props.model.title}</label>
    <input className={`form-input ${props.model.class}`} type={props.model.type} name={props.model.name} value={props.model.value}/>
  </div>);
}

export default InputArea;