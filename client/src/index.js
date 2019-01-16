import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';
import Application from './components/Application/app';
import * as serviceWorker from './serviceWorker';
import ReactEditor from './components/ReactEditor/reacteditor';
import SignIn from './components/SignIn/signIn';
import {Route, BrowserRouter, Link} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
<<<<<<< HEAD
        <Route path="/" component={Application}>
            <Route path="/signin" component={SignIn}/>
        </Route>
    </BrowserRouter>
), document.getElementById('app'));
=======
        <div id="app">
            <Route path="/" component={Application} exact/>
            <Route path="/signin" component={SignIn}/>
        </div>
    </BrowserRouter>
    
    ), document.getElementById('root'));
>>>>>>> 6e9c76292de07d599b0e816ecff0c596453a1d84

//ReactDOM.render(<ReactEditor />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
