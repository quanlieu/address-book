import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import rootReducer from './reducers';
import { firebaseConfig } from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rrfConfig = {
  userProfile: 'users'
};

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = composeEnhancers(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

export default createStoreWithFirebase(rootReducer);
