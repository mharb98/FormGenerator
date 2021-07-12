import React, { Component } from 'react';
import InputText from './InputText';
import CheckBox from './CheckBox';
import InputEmail from './InputEmail';

class Form extends Component{
    constructor(){
        super();
        this.checkAttribute = this.checkAttribute.bind(this);
        this.jObj = {
            formTitle : 'Marwan',
            description : 'We have multiple properties available in new Cairo, fill the form below to know the available options',
            email : 'on',
            jobTitle : 'on',
            bestTime : 'on',
            propertyType : 'on'
        }
    }

    checkAttribute(attribute){
        let ret = false;

        if(this.jObj[attribute] == 'on'){
            ret = true;
        }

        return ret;
    }

    submitHandler = e => {
        e.preventDefault()
        let currState = this.state
        console.log(currState)
      }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value })
      }

    render(){
        let checkEmail = this.checkAttribute('email');
        let checkJobTitle = this.checkAttribute('jobTitle');
        let checkBestTime = this.checkAttribute('bestTime');
        let propertyType = this.checkAttribute('propertyType');

        let em = <></>;
        let jt = <></>;
        let bt = <></>;
        let fs = <></>;

        if(checkEmail){
            em = <InputEmail name={'email'} id={'email'} func = {this.changeHandler}/>;
        }

        if(checkJobTitle){
            jt = <InputText name={'jt'} id={'jt'} placeHolder = {'Enter your job title...'} func = {this.changeHandler}/>
        }

        if(checkBestTime){
            bt = <InputText name={'bt'} id={'bt'} placeHolder = {'Enter the best time to call'} func = {this.changeHandler}/>
        }

        if(propertyType){
            fs = <fieldset>
                        <legend><label>Property Type</label></legend>
                            <CheckBox name={'apartment'} func={this.changeHandler} label={'Apartment'}/>
                            <CheckBox name={'villa'} func={this.changeHandler} label={'Villa'}/>
                            <CheckBox name={'townhouse'} func={this.changeHandler} label={'TownHouse'}/>
                            <CheckBox name={'twinhouse'} func={this.changeHandler} label={'TwinHouse'}/>
                    </fieldset>;      
        }

        return (
            <div>
            <div className="container">
                <h1 id='h'>{this.jObj['formTitle']}</h1>
                <form action="#" method="POST" onSubmit={this.submitHandler}>

                    <h5>{this.jObj['description']}</h5>

                    <InputText name={'name'} id={'name'} placeHolder={'Enter your username...'} func={this.changeHandler} />

                    <InputText name={'phone'} id={'phone'} placeHolder={'Enter your phone number...'} func={this.changeHandler} />

                    {em}

                    {jt}
                    
                    {bt}

                    {fs}
                    
                    <br></br>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        );
    }
}   

export default Form;