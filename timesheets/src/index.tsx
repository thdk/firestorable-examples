import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app';
import * as serviceWorker from './serviceWorker';

// This app is using reserved urls to load and initialize firebase
// See https://firebase.google.com/docs/hosting/reserved-urls

// If you aren't using reserved urls to host your application,
// then you need to initialize firebase here
// firebase.initializeApp({
// ...
// });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
