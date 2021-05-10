import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbXmKJqz0bnsi89I02UZ-0YLmtCwZxM0U",
    authDomain: "reynagram-e46c6.firebaseapp.com",
    databaseURL: "https://reynagram-e46c6-default-rtdb.firebaseio.com",
    projectId: "reynagram-e46c6",
    storageBucket: "reynagram-e46c6.appspot.com",
    messagingSenderId: "833665358058",
    appId: "1:833665358058:web:38cd6f46b391c80e13df93",
    measurementId: "G-BCSPR20C37"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
