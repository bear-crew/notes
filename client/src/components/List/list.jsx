import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import './list.css';  

class List extends Component {
    state = {  }

    selectNote = (e) => {
        const {changeNoteId, changeIsOpen, changeNotes } = this.props;
        changeNoteId(e);
    }

    render() {
        let list = this.props.notes.map(
            item => (<li key={item._id}  onClick = {() => {this.selectNote(item._id)}}><div className="out"><h2>{item.content.pole1}</h2></div><p>{item.content.pole2 ? item.content.pole2 : ""}</p></li>
        ))
        return (
            <ul className="notes">
                {list}
            </ul>
        );
    }
}

export default connect(putStateToProps, putActionsToProps)(List);