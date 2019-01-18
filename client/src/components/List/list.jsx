import React, { Component } from 'react';
import { connect } from 'react-redux';  
import './list.css';  

class List extends Component {
    state = {  }

    selectNote = (e) => {
        console.log(e);
    }

    render() {
        const list = this.props.noteList.map(
            item => (<li key={item._id}  onClick = {() => {this.selectNote(item._id)}}><div className="out"><h2>{item.content.pole1}</h2></div><p>{item.content.pole2 ? item.content.pole2 : ""}</p></li>
        ))
        return (
            <ul className="notes">
                {list}
            </ul>
        );
    }
}

const putStateToProps = (state) => {
    return {
        noteId: state.noteId,
        isOpen: state.isOpen
    };
};

export default connect(putStateToProps)(List);