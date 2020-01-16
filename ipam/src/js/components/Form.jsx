import React from "react";
import InputArea from './InputArea';
function Form(props) {
  return (
    <form>
      <h2 className="form__title">{props.title}</h2>
      {props.inputs.map((input, index) => (<InputArea key={index} model={input}/>))}
    </form>
  );
}

export default Form;
