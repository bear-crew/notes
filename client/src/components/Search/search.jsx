import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    state = {  }
    render() { 
        return (
                <div className="top-notch">
                    <input className="search-field" placeholder="Search" />
                </div>
        );
    }
}

export default Search;