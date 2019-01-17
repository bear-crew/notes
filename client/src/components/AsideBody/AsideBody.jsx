import React, { Component } from 'react';
import Search from '../Search/search';
import '../Aside/aside.css';
import List from '../List/list'


class AsideBody extends Component {
    state = {  }
    render() { 
        return (
            <div class="aside-body">
                <Search/>
                <List/>
            </div>
        );
    }
}
 
export default AsideBody;