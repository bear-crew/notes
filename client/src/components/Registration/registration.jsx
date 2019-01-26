import React, { Component } from 'react';
import './registration.css';

class Registration extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirm: '',
        usernameIsFree: false
    };
    
    updateUsername = e => {
        let copy = e.target.value;
        if (copy) {
            fetch('http://localhost:3001/checkuser', {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username: copy
                })
            }).then((res, co = copy) => {
                if (res.status !== 500) {
                    res.text().then(result => {
                        this.setState({usernameIsFree: result === "true" ? true : false, username: co})
                    });
                }
            })
        }
        else 
            this.setState({usernameIsFree: false, username: ''})
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
        return this.checkPasswords() && this.state.usernameIsFree;
    }

    reg = () => {
        if (this.isEverythingOk()) {
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
                    this.props.history.push("/signin");
                }
            });
        }
    }

    render() {
        return(
            <div className="registration-box">
                <a className="back" href="/signin">👈</a>
                <p className="main-text">Save your notes in a cloud right now</p>
                <input value = {this.state.username} type="text" placeholder="username" className={ this.state.usernameIsFree ? "registration-input green" : "registration-input red"} onChange={ (e) => { this.updateUsername(e); } }/>
                <input value = {this.state.password} type="password" placeholder="password" className="registration-input" onChange={ (e) => { this.updatePassword(e); } }/>
                <input value = {this.state.passwordConfirm} type="password" placeholder="confirm password" className={ this.checkPasswords() ? "registration-input green" : "registration-input red"} onChange={ (e) => {this.updatePasswordConfirm(e); } }/>
                <button type="button" className="_registration-button" onClick={ this.reg }>Sign Up</button> 
            </div>
        );
    }
}

export default Registration;