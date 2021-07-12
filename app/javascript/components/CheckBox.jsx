import React from 'react';

const CheckBox = (props) => {
    return (
        <>
            <label><input type="checkbox" name={props.name} onChange = {props.func} />{props.label}</label>
            <br></br>
        </>
    )
}

export default CheckBox;