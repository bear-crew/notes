import React, { Component } from 'react';
import './signIn.css';

class SignIn extends Component {
    state = {    }

    render() {
        return[
            <div className="login-box">
                <p>Save your notes in a cloud right now</p>
                <input type="email" placeholder="your@email.com" className="login-input"></input>
                <input type="password" placeholder="password" className="login-input"></input>
                <button type="button" className="login-button">Login</button> 
            </div>
        ]
    }
}

export default SignIn;