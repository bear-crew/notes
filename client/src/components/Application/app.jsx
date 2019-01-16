import React, { Component } from 'react';
import Aside from '../Aside/aside';
import MainEditor from '../MainEditor/maineditor';
import SignIn from '../SignIn/signIn';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import {render} from 'react-dom';

class Application extends Component {
    state = { 
        loginState: false
    }
    
    checkLogin () {
        let localData = {
            username: localStorage.getItem('email'),
            token: localStorage.getItem('token')
        }

        if(localData.token) {
            fetch('http://localhost:3001/account', {
                method: 'get',
                headers: {
                    'Content-Type':'application/json',
                    'x-auth': localData.token
                }
            })
            .then(function(res) {
                if(res.status != 500 && res.status != 401){
                    //TODO: обновить токен

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

    componentWillMount () {
        this.setState({loginState: this.checkLogin})
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

