import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application/app';
import * as serviceWorker from './serviceWorker';
import SignIn from './components/SignIn/signIn';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    noteId: '',
    isOpen: 0
};

const rootReducer = (state = initialState, action) => {
    return state;
};

const ACTION_CHANGE_NOTE_ID = 'ACTION_CHANGE_NOTE_ID';

const actionChangeNoteId = {
    type: ACTION_CHANGE_NOTE_ID,
    payload: null
};

const store = createStore(rootReducer);
const app = <Provider store={store}><Application/></Provider>

ReactDOM.render((
    <BrowserRouter>
        <div id="app">
            <Route path="/" component={app} exact/>
            <Route path="/signin" component={SignIn}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

const mapStateToProps = (state) => {
    console.log(state);
    return {
        test: 1
    };
};

const WrappedMainComponent = connect(mapStateToProps)(Application);

//ReactDOM.render(<ReactEditor />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
