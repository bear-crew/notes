import React, { Component } from 'react';
import './registration.css';

class Registration extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirm: ''
    };
    
    updateUsername = e => {
        this.setState({username: e.target.value});
    }

    checkPasswords = () => {
        if (this.state.password === this.state.passwordConfirm && this.state.password !== '') {
            return true;
        }
        else {
            return false;
        }
    }

    updatePassword = e => {
        this.setState({password: e.target.value});
    }

    updatePasswordConfirm = e => {
        this.setState({passwordConfirm: e.target.value});
    }

    isEverythingOk = () => {
        if (this.checkPasswords() && this.state.username !== '')
            return true;
        else
            return false;
    }

    reg = () => {
        if (this.isEverythingOk()) {
            //TODO: finish username check
            fetch('http://localhost:3001/checkuser', {
                method: 'get',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username
                })
            })

            fetch('http://localhost:3001/user', {
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
            <div className="registration-box">
                <p>Save your notes in a cloud right now</p>
                <input value = {this.state.username} type="text" placeholder="username" className="registration-input" onInput={ (e) => {this.updateUsername(e); }}/>
                <input value = {this.state.password} type="password" placeholder="password" className="registration-input" onInput={ (e) => {this.updatePassword(e); }}/>
                <input value = {this.state.passwordConfirm} type="password" placeholder="confirm password" className={ this.checkPasswords() ? "registration-input green" : "registration-input red"} onChange={ (e) => {this.updatePasswordConfirm(e); }}/>
                <button type="button" className="_registration-button" onClick={ this.reg }>Sign Up</button> 
            </div>
        );
    }
}

export default Registration;