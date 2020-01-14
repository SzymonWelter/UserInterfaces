import React from 'react';

function Input(props){
    return(
        <form className="form" onSubmit={props.handler}>
            <input className="input" name={props.name} placeholder='Type your todo here!'></input>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default Input;