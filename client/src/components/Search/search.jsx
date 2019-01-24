import React, { Component } from 'react';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';
import './search.css';

class Search extends Component {
    state = {  }

    search = (value) => {
        const { changeSearch } = this.props;
        changeSearch(value.target.value);
    }

    render() { 
        return (
            <div className="top-notch">
                <input className="search-field" placeholder="Search" onInput = { value => this.search(value) }/>
            </div>
        );
    }
}

export default connect(putStateToProps, putActionsToProps)(Search);