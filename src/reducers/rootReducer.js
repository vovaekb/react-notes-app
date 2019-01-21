import {combineReducers} from 'redux';
import notes from './noteReducer';

const rootReducer = combineReducers({
      // short hand property names
      notes
});

export default rootReducer;