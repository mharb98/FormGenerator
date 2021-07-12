import React, { Component } from 'react';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

class Register extends Component{
   changeHandler = e => {
        this.setState({[e.target.name] : e.target.value })
   }

   submitHandler = e => {
        e.preventDefault()
        let currState = this.state
        alert(currState['email'] + '-' + currState['password'])
        //window.location.href = "/";
    }

   render() {
       return (
        <div className="container">
            <h1>Register to generate your own forms</h1>
             <form action="#" method="POST" onSubmit={this.submitHandler}>
                 <InputEmail name={'email'} id={'email'} func={this.changeHandler}/>
                 <InputPassword name={'password'} id={'password'} func={this.changeHandler}/>
                 <InputPassword name={'confirm_password'} id={'confirm_password'} func={this.changeHandler}/>
                 <input type="submit" value="Register" />
             </form>
        </div>
       );
   }
}

export default Register;