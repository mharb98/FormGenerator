import React from 'react';

const InputText = (props) => {
    return (
        <>
            <input type="text" id={props.id} name={props.name} placeholder={props.placeHolder} maxLength="30" onChange = {props.func} required/>
            <br></br>
            <br></br>
        </>
    )
}

export default InputText;