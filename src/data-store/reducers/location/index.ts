const initialState = {
    geocodes: {
        latitude: 0,
        longitude: 0,
    },
    radius: 1,
};

export default function locationReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'updateGeocodes': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                geocodes: action.payload,
            };
        }
        case 'updateRadius': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                radius: action.payload,
            };
        }
        default:
            return state;
    }
}
