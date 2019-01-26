import React, { Component } from 'react';
import '../Search/search.css';
import UserMenu from '../UserMenu/usermenu';
import './topnotch.css';

class TopNotch extends Component {
    state = {
        menuIsHidden: true
    }

    showMenu = () => {
        if (this.state.menuIsHidden)
            this.setState({menuIsHidden: false});
        else
            this.setState({menuIsHidden: true});
    }

    render() {
        const login = !this.props.loginState && <a href="/signin"><button type="button" className="login-button">Login</button></a>
        const userpic = this.props.loginState && <button type="button" className="user-button" onClick={this.showMenu}><img src="photo.jpg" className="user-pic" /></button>
        const username = this.props.loginState && <div className="user-name" onClick={this.showMenu}>{this.props.username}</div>
        return(
            <div className="top-notch">
                <div className="left-edit">
                    {login}
                    {userpic}
                    {username}
                    <UserMenu shouldHide={this.state.menuIsHidden} username = {this.props.username}/>
                </div>
            </div>
        )
    }
}

export default TopNotch;