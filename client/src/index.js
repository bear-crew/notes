import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import SignIn from './components/SignIn/signIn';
import Registration from './components/Registration/registration';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';
import { BrowserRouter, Route} from 'react-router-dom';
import Application from './components/Application/app';

export const ACTION_CHANGE_CURRENT_NOTE = 'ACTION_CHANGE_CURRENT_NOTE';
export const ACTION_CHANGE_NOTES = 'ACTION_CHANGE_NOTES';
export const ACTION_UPDATE_NOTE = 'ACTION_UPDATE_NOTE';
export const ACTION_DELETE_NOTE = 'ACTION_DELETE_NOTE';
export const ACTION_CHANGE_SEARCH = 'ACTION_CHANGE_SEARCH';

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store = {store}>
        <BrowserRouter>
            <div id="app">
                <Route path="/" component={Application} exact/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={Registration}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();