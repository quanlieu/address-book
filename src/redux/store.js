import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const firebaseConfig = {
  apiKey: 'AIzaSyB-EQGqpUFEdLlXRQ6cjAFZjQDVjGnnNFE',
  authDomain: 'address-book-bdae3.firebaseapp.com',
  databaseURL: 'https://address-book-bdae3.firebaseio.com',
  projectId: 'address-book-bdae3',
  storageBucket: '',
  messagingSenderId: '468194465677'
};
const rrfConfig = {
  userProfile: 'users'
};

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = composeEnhancers(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

export default createStoreWithFirebase(rootReducer);
