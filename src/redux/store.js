import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const firebaseConfig = {
  apiKey: 'AIzaSyDAslG8GCT2WQV99lrfi0yM_J4dD1Ojl30',
  authDomain: 'kyne-project.firebaseapp.com',
  databaseURL: 'https://kyne-project.firebaseio.com',
  projectId: 'kyne-project',
  storageBucket: '',
  messagingSenderId: '938781006943'
};
const rrfConfig = {
  userProfile: 'users'
};

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = composeEnhancers(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

export default createStoreWithFirebase(rootReducer);
