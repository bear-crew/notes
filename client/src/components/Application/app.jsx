import React, { Component } from 'react';
import Aside from '../Aside/aside';
import MainEditor from '../MainEditor/maineditor';
import SignIn from '../SignIn/signIn';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import {render} from 'react-dom';

class Application extends Component {
    state = { 
        loginState: false,
        username: ''
    }
    
    checkLogin = () => {
        const token = localStorage.getItem('token');

        if(token) {
            fetch('http://localhost:3001/account', {
                method: 'get',
                headers: {
                    'Content-Type':'application/json',
                    'x-auth': token
                }
            })
            .then(function(res) {
                if(res.status != 500 && res.status != 401){
                    //TODO: обновить токен
                    res.json().then(result => {
                        if(result) {
                            this.setState({username: result.user});
                        }
                    });
                    console.log('NEW TOKEN');
                    return true
                }
                else 
                    return false
            });
        }
        else {
            return false;
        }
            
    }

    componentDidMount() {
        const token = localStorage.getItem('token');

        if(token) {
            fetch('http://localhost:3001/account', {
                method: 'get',
                headers: {
                    'Content-Type':'application/json',
                    'x-auth': token
                }
            })
            .then(res => {
                if(res.status != 500 && res.status != 401){
                    //TODO: обновить токен
                    this.setState({loginState: true})
                }
                else 
                    this.setState({loginState: false})
            });
        }
        else
            this.setState({loginState: false})
    }

    // componentWillUpdate () {
    //     this.setState({loginState: this.checkLogin()})
    // }

    render() { 
        if(this.state.loginState)
            return [
                <Aside />,
                <MainEditor loginState = {true}/>
            ];
        else
            return (
                <MainEditor loginState = {false} />
                /* <MainEditor /> */
            );
    }
}
 
export default Application;

