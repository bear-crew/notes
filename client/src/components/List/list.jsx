import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import './list.css';  

class List extends Component {
    state = { }

    selectNote = (e) => {
        const {changeCurrentNote} = this.props;
        changeCurrentNote(e);
    }

    render() {
        let list = this.props.notes.map(
            item => (
            <li 
            key={item._id} 
            className={ this.props.currentNote && this.props.currentNote._id === item._id ? "chosen" : "" } 
            onClick = {() => {this.selectNote(item)}}>
                <div className="out">
                    <h2>
                        { item.content && item.content.blocks[0].text !== "" ? item.content.blocks[0].text : "New note" }
                    </h2>
                </div>
                <p>
                    { item.content && item.content.blocks[1] ? item.content.blocks[1].text : "" }
                </p>
            </li>
        ));
        return (
            <ul className="notes">
                {list}
            </ul>
        );
    }
}

export default connect(putStateToProps, putActionsToProps)(List);