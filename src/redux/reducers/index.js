import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import address from './address';

export default combineReducers({ firebase: firebaseReducer, address });
