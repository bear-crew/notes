import React, { Component } from 'react';
import './signIn.css';

class SignIn extends Component {
    constructor (props) {
        super(props);
      
        this.state = {
            username: '',
            password: '',
        };
      
        this.logOn = this.logOn.bind(this);
    }
    
    updateUsername(e) {
        this.setState({username: e.target.value});
    }

    updatePassword(e) {
        this.setState({password: e.target.value});
    }

    logOn() {
        if (this.state.username !== '' && this.state.password !== '') {
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(res => {
                if(res.status !== 500 && res.status !== 401) {
                    res.text().then(result => {
                        localStorage.setItem('token', result);
                        localStorage.setItem('username', this.state.username);
                        this.props.history.push("/");
                        console.log('Successfully Login');
                        //TODO: Тут нужно как-то передать пропсы (логин) в TopNotch и вернуться на главную
                        // По идее у нас тут положится токен в локалсторейдж и при рендере app.jsx все должно отработать и вывести нормально имя
                        //console.log(localStorage.getItem('token'));
                    });
                    return true;
                }
                else 
                    return false;
            });
        }
    }

    render() {
        return(
            <div className="login-box">
                <a className="back" href="/">👈</a>
                <p className="main-text">Save your notes in a cloud right now</p>
                <input value = {this.state.username} type="text" placeholder="username" className="login-input" onChange={(e) => {this.updateUsername(e); }}/>
                <input value = {this.state.password} type="password" placeholder="password" className="login-input" onChange={(e) => {this.updatePassword(e); }}/>
                <button type="button" className="_login-button" onClick={this.logOn}>Login</button>
                <div className="wrapper">
                    <p className="small-text">Do not have an account?</p>
                    <a className="sign-up" href="/signup">Sign Up</a>
                </div> 
            </div>
        );
    }
}

export default SignIn;