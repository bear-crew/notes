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

    checkSearch = (item) => {
        if (this.props.search === "") 
            return true;

        let str = "new note";
       
        if (!item.content || item.content.blocks[0].text === "")
            return str.indexOf(this.props.search.toLowerCase()) !== -1;

        if (item.content) {
            const searchField = this.props.search.toLowerCase();
            for (let i in item.content.blocks) 
                if (item.content.blocks[i].text.toLowerCase().indexOf(searchField) !== -1)
                    return true;
        }

        return false;
    }

    render() {
        let list = this.props.notes.map(
            item => ( this.checkSearch(item) &&
            <li 
            key={item._id} 
            className={ this.props.currentNote && this.props.currentNote._id === item._id ? "item chosen" : "item" } 
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