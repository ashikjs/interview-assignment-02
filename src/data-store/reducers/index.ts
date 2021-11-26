import { combineReducers } from 'redux';
import locationReducer from './location';

const rootReducer = combineReducers<any>({
    location: locationReducer,
});

export default rootReducer;
