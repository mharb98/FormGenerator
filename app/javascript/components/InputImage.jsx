import React from 'react';

const InputImage = (props) => {
    return (
        <>
            <div id="uploadImage">
              <label id="imgLabel">Upload Header Image</label>
              <input type="file" id={props.id} name={props.name} accept="image/*" onChange = {props.func} required/>
            </div>
            <br></br>
        </>
    )
}

export default InputImage;