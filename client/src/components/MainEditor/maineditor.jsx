import './maineditor.css';
import React, { Component } from 'react';
import ReactEditor from '../ReactEditor/reacteditor';
import TopNotch from '../TopNotch/topnotch';
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';

class MainEditor extends Component {
    render() {
        return ( 
            <main id="note-editor">
                <TopNotch loginState={ this.props.loginState } username={ this.props.username }/>
                <div id="editor">
                    <ReactEditor/>
                </div>
            </main> 
        );
    }
}
 
export default connect(putStateToProps, putActionsToProps)(MainEditor);