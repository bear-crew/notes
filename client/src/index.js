import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/Application/app';
import * as serviceWorker from './serviceWorker';
import ReactEditor from './components/ReactEditor/reacteditor';

ReactDOM.render(<Application />, document.getElementById('app'));

//ReactDOM.render(<ReactEditor />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
