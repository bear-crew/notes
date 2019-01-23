import React, { Component } from 'react';
import AsideBody from '../AsideBody/AsideBody';
import { EditorState } from 'draft-js';
import { convertToRaw } from "draft-js";
import './aside.css';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';

class Aside extends Component {
    state = { 
        editorState: EditorState.createEmpty()
    }

    addNote = () => {
        console.log("this2", this.state.editorState.getCurrentContent())
        fetch('http://localhost:3001/note', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'x-auth': localStorage.getItem('token')
            },
            body: JSON.stringify({
                note: convertToRaw(this.state.editorState.getCurrentContent())
            })
        })
        .then(res => {
            if(res.status === 200) {
                res.json().then(result => {
                    if(result) {
                        let noteList = [...this.props.notes];
                        noteList.push(result);
                        const { changeNotes, changeCurrentNote } = this.props;
                        changeNotes(noteList);
                        changeCurrentNote(result);
                    }
                });                
            }
        });
    }

    // componentDidMount() {

    // }

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