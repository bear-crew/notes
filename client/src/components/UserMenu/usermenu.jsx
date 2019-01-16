import React, { Component } from 'react';
import './usermenu.css';

class UserMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.logOut = this.logOut.bind(this);
    }
    
    logOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        window.location.reload();
    }

    render() { 
        return (
            <div className={this.props.shouldHide ? 'bubble hidden' : 'bubble'}>
                <img src="photo.jpg" alt="Profile picture"/>
                <div className="name-and-signout">
                <p className="bubble-username">fowku</p>
                <button type="button" className="logout-button" onClick={this.logOut}>Sign out</button>
                </div>
            </div>
        );
    }
}
 
export default UserMenu;