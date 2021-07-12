import React from 'react';

const InputEmail = (props) => {
    return (
        <>
            <input placeholder = "Email" type="email" name={props.name} id={props.id}  onChange = {props.func} required/>
            <br></br>
            <br></br>
        </>
    )
}

export default InputEmail;