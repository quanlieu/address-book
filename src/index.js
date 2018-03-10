import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';
import initialFirebase from './initialFirebase';

import 'normalize.css';
import './less/index.less';

initialFirebase();
firebase.auth().onAuthStateChanged(user => {
  // TODO: This is to make sure the user don't get the login screen when they've
  //   already logged in. But will trigger dispatch twice and call dispatch in
  //   here is code smell. Fix in the future.
  if (user) {
    store.dispatch({ type: 'LOGIN_SUCCESS' });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-web-root')
);
