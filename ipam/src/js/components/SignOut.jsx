import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from "src/js/actions";

function SignOut(props){
    props.signOut();
    return <Redirect to='/signin' />
}

export default connect(null,{signOut: userActions.signOut})(SignOut);