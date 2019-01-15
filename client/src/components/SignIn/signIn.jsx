import React, { Component } from 'react';
import './signIn.css';

class SignIn extends Component {
    constructor (props) {
        super(props);
      
        this.state = {
            email: '',
            password: '',
        };
      
        this.logOn = this.logOn.bind(this);
    }
    
    updateEmail(e) {
        this.setState({email: e.target.value})
    }

    updatePassword(e) {
        this.setState({password: e.target.value})
    }

    logOn() {
        console.log(this.state.email)
        console.log(this.state.password)
    }

    render() {
        return[
            <div className="login-box">
                <p>Save your notes in a cloud right now</p>
                <input value = {this.state.email} type="email" placeholder="your@email.com" className="login-input" onChange={(e) => {this.updateEmail(e); }}></input>
                <input value = {this.state.password} type="password" placeholder="password" className="login-input" onChange={(e) => {this.updatePassword(e); }}></input>
                <button type="button" className="login-button" onClick={this.logOn}>Login</button> 
            </div>
        ]
    }
}

export default SignIn;