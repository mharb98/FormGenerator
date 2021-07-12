import React from 'react';

const TextArea = (props) => {
    return (
        <>
            <textarea placeholder={props.placeHolder} name={props.name} id={props.id} maxLength="100" onChange = {props.func} required></textarea>
            <br></br>
        </>
    )
}

export default TextArea;