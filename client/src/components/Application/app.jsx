import React, { Component } from 'react';
import Aside from '../Aside/aside';
import MainEditor from '../MainEditor/maineditor';
import SignIn from '../SignIn/signIn';

class Application extends Component {
    state = { 
        loginState: false
    }
    
    checkLogin () {
        let localData = {
            username: localStorage.getItem('username'),
            token: localStorage.getItem('token')
        }

        if(localData.login && localData.token) {
            fetch('http://localhost:3001/account', {
                method: 'get',
                headers: {
                    'Content-Type':'application/json',
                    'x-auth': localData.token
                }
            })
            .then(function(res) {
                if(res.status != 500 && res.status != 401 && res.body.user == localData.username){
                    //TODO: обновить токен
                    return true
                }
                else 
                    return false
            });
            
            //TODO: в зависимости от запроса определяем loginState
        }
        else
            return false;
    }

    componentWillMount () {
        this.setState({loginState: this.checkLogin()})
    }

    componentWillUpdate () {
        this.setState({loginState: this.checkLogin()})
    }
    render() { 
        if(this.state.loginState)
            return [
                <Aside />,
                <MainEditor />
            ];
        else
            return (
                <SignIn />
                /* <MainEditor /> */
            );
    }
}
 
export default Application;