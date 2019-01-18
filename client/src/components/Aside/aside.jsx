import './aside.css';
import React, { Component } from 'react';
import AsideBody from '../AsideBody/AsideBody';

class Aside extends Component {
    state = {  
        noteList: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/note', {
            method: 'get',
            headers: {
                'Content-Type':'application/json',
                'x-auth': localStorage.getItem('token')
            }
        })
        .then(res => {
            if(res.status !== 500 && res.status !== 401) {
                res.json().then(result => {
                    if(result) {
                        let arr = [];
                        arr = result;
                        this.setState({noteList: arr});
                    }
                })
            }
        })
    }

    render() { 
        return (
            <aside id="menu">
                <AsideBody noteList = {this.state.noteList}/>
                <div className ="menu-buttons">
                    <button type="button" className="new-note"></button>
                    <button type="button" className="delete-note"></button>
                </div>
            </aside>
        );
    }
}
 
export default Aside;