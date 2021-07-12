import React, { Component } from 'react';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

class Login extends Component{
   changeHandler = e => {
        this.setState({[e.target.name] : e.target.value })
   }

   submitHandler = e => {
        e.preventDefault()
        let currState = this.state
        const url = "/api/v1/users/checkUser";
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
            .then(response => (response.message == true ? window.location.href = "/profile" : alert('Wrong Credenetials!')))
            .catch(error => console.log(error.message)
        );

        //window.location.href = "/profile";
    }

    redirectFunc = e => {
        window.location.href = "/register";
    }

   render() {
       return (
        <div className="container">
            <h1>Login to generate your own forms</h1>
             <form action="#" method="GET" onSubmit={this.submitHandler}>
                 <InputEmail name={'email'} id={'email'} func={this.changeHandler}/>
                 <InputPassword name={'password'} id={'password'} func={this.changeHandler}/>
                 <input type="submit" value="Login" />
             </form>
             <br></br>
             <a onClick={this.redirectFunc} href="#">Create your account!</a>
        </div>
       );
   }
}

export default Login;