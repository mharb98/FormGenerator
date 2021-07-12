import React, { Component } from 'react';
import InputImage  from './InputImage';
import InputText from './InputText';
import TextArea from './TextArea';
import CheckBox from './CheckBox';

class Profile extends Component{
  submitHandler = e => {
    e.preventDefault()
    let currState = this.state
    //window.location.href = "/form/"+currState['formTitle'];
  }
  
  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value })
  }

  changeFileState = e => {
    let files = e.target.files;
    this.setState({ files: files[0] }, () => { console.log(this.state.files) })
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

                    <fieldset>
                        <legend><label>Optional Data</label></legend>
                            <CheckBox name={'email'} func={this.changeHandler} label={'Email'}/>
                            <CheckBox name={'jobTitle'} func={this.changeHandler} label={'Job Title'}/>
                            <CheckBox name={'bestTime'} func={this.changeHandler} label={'Best Time To Call'}/>
                            <CheckBox name={'propertyType'} func={this.changeHandler} label={'Propertt Type'}/>
                    </fieldset>             <br></br>
                    <input type="submit" value="Create Form" />
                </form>
            </div>
        </div>
      );
  }
}

export default Profile;