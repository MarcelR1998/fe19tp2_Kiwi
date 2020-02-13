import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import ApiReader from './components/ApiReader';
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
        <ApiReader />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);
serviceWorker.unregister();
