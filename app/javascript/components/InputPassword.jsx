import React from 'react';

const InputPassword = (props) => {
    return (
        <>
            <input placeholder = "Password" type="password" name={props.name} id={props.id}  onChange = {props.func} required/>
            <br></br>
            <br></br>
        </>
    )
}

export default InputPassword;