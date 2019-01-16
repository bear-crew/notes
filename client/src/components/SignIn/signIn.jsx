import React, { Component } from 'react';
import './signIn.css';
import { Redirect } from 'react-router-dom';

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
        if (this.state.email != '' && this.state.password != '') {
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(res => {
                if(res.status != 500 && res.status != 401){
                    res.text().then(result => {
                        localStorage.setItem('token', result);
                        localStorage.setItem('email', this.state.email);
                        this.props.history.push("/");
                        console.log('Successfully Login');
                        //TODO: Тут нужно как-то передать пропсы (логин) в TopNotch и вернуться на главную
                        // По идее у нас тут положится токен в локалсторейдж и при рендере app.jsx все должно отработать и вывести нормально имя
                        //console.log(localStorage.getItem('token'));
                    });

                    return true
                }
                else 
                    return false
            });
        }
    }

    render() {
        return[
            <div className="login-box">
                <p>Save your notes in a cloud right now</p>
                <input value = {this.state.email} type="email" placeholder="your@email.com" className="login-input" onChange={(e) => {this.updateEmail(e); }}></input>
                <input value = {this.state.password} type="password" placeholder="password" className="login-input" onChange={(e) => {this.updatePassword(e); }}></input>
                <button type="button" className="_login-button" onClick={this.logOn}>Login</button> 
            </div>
        ]
    }
}

export default SignIn;