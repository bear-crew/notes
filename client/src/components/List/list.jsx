import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import './list.css';  

class List extends Component {
    state = {  }

    selectNote = (e) => {
        const {changeCurrentNote} = this.props;
        changeCurrentNote(e);
    }

    render() {
        let list = this.props.notes.map(
            item => (<li key={item._id}  onClick = {() => {this.selectNote(item)}}><div className="out"><h2>{"NEW NOTE"}</h2></div><p>{"new note"}</p></li>
        ))
        return (
            <ul className="notes">
                {list}
            </ul>
        );
    }
}

export default connect(putStateToProps, putActionsToProps)(List);