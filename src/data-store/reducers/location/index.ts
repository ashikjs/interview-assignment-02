import { LocationState } from '../../../models/location';
import * as fromLocationActions from '../../actions/location';

const initialState: LocationState = {
    geocode: {
        latitude: 0,
        longitude: 0,
    },
    radius: 0,
};

export default function locationReducer(
    state: LocationState = initialState,
    action: fromLocationActions.LocationActionTypes
) {
    switch (action.type) {
        case fromLocationActions.LocationActions.UPDATE_LOCATION_GEOCODE: {
            return {
                ...state,
                geocode: action.payload,
            };
        }
        case fromLocationActions.LocationActions.UPDATE_LOCATION_RADIUS: {
            return {
                ...state,
                radius: action.payload,
            };
        }
        default:
            return state;
    }
}
