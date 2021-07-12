import React, { Component } from 'react';
import InputText from './InputText';
import CheckBox from './CheckBox';
import InputEmail from './InputEmail';

class Form extends Component{
    constructor(){
        super();

        let curr_url = window.location.href;

        let arr = curr_url.split('/');

        this.formTitle = arr[arr.length - 1];

        this.state = { jObj: []}
    }

    componentDidMount() {
        const url = `/api/v1/forms/show/${this.formTitle}`;

        fetch(url)

          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ jObj: response[0]  }))
          .catch(() => this.props.history.push("/")
        );
    }

    submitHandler = e => {
        e.preventDefault()
        alert(this.state)
      }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value })
      }

    render(){
        return (
            <div>
            <div className="container">
                <h1 id='h'>{this.state.jObj['formTitle']}</h1>
                <form action="#" method="POST" onSubmit={this.submitHandler}>

                    <h5>{this.state.jObj['description']}</h5>

                    <InputText name={'name'} id={'name'} placeHolder={'Enter your username...'} func={this.changeHandler} />

                    <InputText name={'phone'} id={'phone'} placeHolder={'Enter your phone number...'} func={this.changeHandler} />

                    {this.state.jObj['email'] === 'on' ? <InputEmail name={'email'} id={'email'} func = {this.changeHandler}/> : <></>}

                    {this.state.jObj['jobTitle'] === 'on' ? <InputText name={'jt'} id={'jt'} placeHolder = {'Enter your job title...'} func = {this.changeHandler}/> : <></>}

                    {this.state.jObj['bestTime'] === 'on' ? <InputText name={'bt'} id={'bt'} placeHolder = {'Enter the best time to call'} func = {this.changeHandler}/> : <></>}

                    {this.state.jObj['propertyType'] === 'on' ?<div id="fs"> <fieldset>
                        <legend><label>Property Type</label></legend>
                            <CheckBox name={'apartment'} func={this.changeHandler} label={'Apartment'}/>
                            <CheckBox name={'villa'} func={this.changeHandler} label={'Villa'}/>
                            <CheckBox name={'townhouse'} func={this.changeHandler} label={'TownHouse'}/>
                            <CheckBox name={'twinhouse'} func={this.changeHandler} label={'TwinHouse'}/>
                    </fieldset></div> :<></>} 

                    <br></br>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        );
    }
}   

export default Form;