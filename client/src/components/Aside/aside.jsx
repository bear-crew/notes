import React, { Component } from 'react';
import Search from '../Search/search';
import './aside.css';
import List from '../List/list'


class Aside extends Component {
    state = {  }
    render() { 
        return (
            <aside id="menu">
                <Search/>
                <List/>
            </aside>
        );
    }
}
 
export default Aside;