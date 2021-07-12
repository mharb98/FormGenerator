import React, { Component } from 'react';
import InputImage  from './InputImage';
import InputText from './InputText';
import TextArea from './TextArea';
import CheckBox from './CheckBox';
import { type } from 'jquery';

class Profile extends Component{
  submitHandler = e => {
    e.preventDefault()
    let currState = this.state
    console.log(currState)
    const url = "/api/v1/forms/create";
    const { formTitle, files, description, emailBox, jobTitleBox, bestTimeBox, propertyTypeBox} = currState;    

    if(formTitle.length == 0 || description.length == 0)
       return;

    const img = files
    const email = emailBox === 'on' ? 'on' : 'off'
    const jobTitle = jobTitleBox === 'on' ? 'on' : 'off'
    const bestTime = bestTimeBox === 'on' ? 'on' : 'off'
    const propertyType = propertyTypeBox === 'on' ? 'on' : 'off'

    const body = {
      formTitle,
      img,
      description,
      email,
      jobTitle,
      bestTime,
      propertyType
    };
          
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
    },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
        throw new Error("Network response was not ok.");
      })
      .then(console.log('Form created'))
      .catch(error => console.log(error.message)
    );
        
    //window.location.href = "/";
  }
  
  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value })
  }

  changeFileState = e => {
    let files = e.target.files;
    this.setState({ files: files[0]['name'] }, () => { console.log(this.state.files) })
  }

  render (){
      return (
        <div>
            <div className="container">
                <h1>User Generated Form</h1>
                <form action="#" method="POST" onSubmit={this.submitHandler}>

                    <InputText name={'formTitle'} id={'formTitle'} placeHolder={'Form Title'} func = {this.changeHandler}/>
          
                    <InputImage name={'img'} id={'img'} func={this.changeFileState} />

                    <TextArea placeHolder = {'Description'} name={'description'} id={'description'} func={this.changeHandler} />

                    <div id="fs">
                    <fieldset>
                        <legend><label>Optional Data</label></legend>
                            <CheckBox name={'emailBox'} func={this.changeHandler} label={'Email'}/>
                            <CheckBox name={'jobTitleBox'} func={this.changeHandler} label={'Job Title'}/>
                            <CheckBox name={'bestTimeBox'} func={this.changeHandler} label={'Best Time To Call'}/>
                            <CheckBox name={'propertyTypeBox'} func={this.changeHandler} label={'Propertt Type'}/>
                    </fieldset> 
                    </div>
                    <br></br>
                    <input type="submit" value="Create Form" />
                </form>
            </div>
        </div>
      );
  }
}

export default Profile;