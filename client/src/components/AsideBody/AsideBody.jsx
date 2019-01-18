import React, { Component } from 'react';
import Search from '../Search/search';
import '../Aside/aside.css';
import List from '../List/list'


class AsideBody extends Component {
    state = {  }
    render() { 
        return (
            <div className="aside-body">
                <Search/>
                <List noteList = {this.props.noteList}/>
            </div>
        );
    }
}
 
export default AsideBody;