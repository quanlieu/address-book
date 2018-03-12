import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import address from './address';
import load from './load';

export default combineReducers({ firebase: firebaseReducer, address, load });
