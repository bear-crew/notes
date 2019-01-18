import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import SignIn from './components/SignIn/signIn';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers'
import { BrowserRouter, Route} from 'react-router-dom'
import Application from './components/Application/app'

export const ACTION_CHANGE_NOTE_ID = 'ACTION_CHANGE_NOTE_ID';

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store = {store}>
        <BrowserRouter>
            <div id="app">
                <Route path="/" component={Application} exact/>
                <Route path="/signin" component={SignIn}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));



//ReactDOM.render(<ReactEditor />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
