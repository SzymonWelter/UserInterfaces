import React from "react";
import {Form} from 'src/js/components';
function SignInPage(props) {
  return (
    <div className="form-wrapper form-wrapper--light form-wrapper--shadowed">
      <Form
        title='Sign in'
        inputs={inputs}
      />
    </div>
  );
}

const inputs = [
    {name: 'username', title: 'username', type:'text', class:''},
    {name: 'password', title: 'password', type:'password',class:''},
    {name: 'submit', type: 'submit', class: 'form-input--submit', value: 'Sign in'}
]

export default SignInPage;
