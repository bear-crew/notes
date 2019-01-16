import React, { Component } from 'react';
import './usermenu.css';

class UserMenu extends Component {
    state = {  }
    render() { 
        return (
            <div className="bubble">
                <img src="photo.jpg" alt="Profile picture"/>
                <div className="name-and-signout">
                    <p className="bubble-username">fowku</p>
                    <a href="/logout"><button type="button" className="logout-button">Sign out</button></a>
                </div>
            </div>
        );
    }
}
 
export default UserMenu;