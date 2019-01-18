import React, { Component } from 'react';
import Aside from '../Aside/aside';
import MainEditor from '../MainEditor/maineditor';

class Application extends Component {
    state = { 
        loginState: false,
        username: ''
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
                    res.json().then(result => {
                        if(result) {
                            this.setState({username: result.username});
                        }
                    });
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
                <MainEditor loginState = {true} username = {this.state.username}/>
            ];
        else
            return (
                <MainEditor loginState = {false} />
                /* <MainEditor /> */
            );
    }
}
 
export default Application;

