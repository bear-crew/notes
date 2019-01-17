import React, { Component } from 'react';

import './aside.css';
import AsideBody from '../AsideBody/AsideBody';

class Aside extends Component {
    state = {  }
    render() { 
        return (
            <aside id="menu">
                <AsideBody/>
                <div className ="menu-buttons">
                    <buton type="button" className="new-note"></buton>
                    <buton type="button" className="delete-note"></buton>
                </div>
            </aside>
        );
    }
}
 
export default Aside;