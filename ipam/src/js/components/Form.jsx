import React from "react";

function Form(props) {
  return (
    <form>
      <h2 className="form__title">{props.title}</h2>
      {props.inputs.map((input, index) => <div className='input-area' key={index}>
        <label className='form-input__name'>{input.title}</label>
        <input className={`form-input ${input.class}`} type={input.type} name={input.name}/>
      </div>)}
    </form>
  );
}

export default Form;
