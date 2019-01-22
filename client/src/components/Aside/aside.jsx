import React, { Component } from 'react';
import AsideBody from '../AsideBody/AsideBody';
import './aside.css';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';

class Aside extends Component {
    state = { }

    addNote = () => {
        fetch('http://localhost:3001/note', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'x-auth': localStorage.getItem('token')
            },
            body: JSON.stringify({
                note: {
                    pole1: "NEW-NOTE_1",
                    pole2: "new-note_1"
                }
            })
        })
        .then(res => {
            if(res.status === 200) {
                res.json().then(result => {
                    if(result) {
                        let notes = this.props.notes;
                        notes.push(result);
                        const { changeNotes } = this.props;
                        changeNotes(notes);
                    }
                });                
            }
        });
    }

    componentDidMount() {
        console.log("aside did mount")
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
                        const { changeNotes } = this.props;
                        changeNotes(result);
                    }
                });
            }
        });
    }

    render() { 
        const bin = this.props.isOpen && <button type="button" className="delete-note"></button> //isOpen obsolete
        return (
            <aside id="menu">
                <AsideBody/>
                <div className ="menu-buttons">
                    <button type="button" className="new-note" onClick = {this.addNote}></button>
                    {bin}
                </div>
            </aside>
        );
    }
}


export default connect(putStateToProps, putActionsToProps)(Aside);