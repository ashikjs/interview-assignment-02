import { combineReducers } from 'redux';
import locationReducer from './location';
import restaurantReducer from './restaurant';

const rootReducer = combineReducers<any>({
    location: locationReducer,
    restaurant: restaurantReducer,
});

export default rootReducer;
