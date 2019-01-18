import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import SignIn from './components/SignIn/signIn';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';
import { BrowserRouter, Route} from 'react-router-dom';
import Application from './components/Application/app';

export const ACTION_CHANGE_NOTE_ID = 'ACTION_CHANGE_NOTE_ID';
export const ACTION_CHANGE_IS_OPEN = 'ACTION_CHANGE_IS_OPEN';

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

serviceWorker.unregister();