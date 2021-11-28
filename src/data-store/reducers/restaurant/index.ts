import * as fromRestaurantActions from '../../actions/restaurant';
import { RestaurantState } from '../../../models/restaurant';

const initialState: RestaurantState = {
    restaurants: [],
    selectedRestaurant: null,
};

export default function restaurantReducer(
    state: RestaurantState = initialState,
    action: fromRestaurantActions.RestaurantActionTypes
) {
    switch (action.type) {
        case fromRestaurantActions.RestaurantActions.RESTAURANT_LIST: {
            return {
                ...state,
                restaurants: action.payload,
            };
        }
        case fromRestaurantActions.RestaurantActions.SELECTED_RANDOM_RESTAURANT: {
            const randomRIndex = Math.floor(Math.random() * state.restaurants.length);

            return {
                ...state,
                selectedRestaurant: state.restaurants[randomRIndex],
            };
        }
        case fromRestaurantActions.RestaurantActions.SELECTED_RESTAURANT: {
            return {
                ...state,
                selectedRestaurant: action.payload,
            };
        }
        default:
            return state;
    }
}
