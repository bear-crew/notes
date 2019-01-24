import React, { Component } from 'react';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';
import './search.css';

class Search extends Component {
    state = {  }

    search = (e) => {
        const {changeSearch} = this.props;
        changeSearch(e.target.value);
    }

    render() { 
        return (
                <div className="top-notch">
                    <input className="search-field" placeholder="Search" onInput = {(e) => {this.search(e);}}/>
                </div>
        );
    }
}

export default connect(putStateToProps, putActionsToProps)(Search);