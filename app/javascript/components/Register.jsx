import React, { Component } from 'react';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

class Register extends Component{
    constructor(props) {
        super(props);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }
   
    stripHtmlEntities(str) {
        return String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
    }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value })
    }

   submitHandler = e => {
        e.preventDefault()
        let currState = this.state
        const url = "/api/v1/users/create";
        const { email, password } = currState;

        if(email.lenth == 0 || password.lenth == 0)
            return;

        const body = {
            email,
            password
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
            .then(console.log('User created'))
            .catch(error => console.log(error.message)
        );
        
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