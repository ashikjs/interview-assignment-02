import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// @Components
import RestaurantFinder from '../../components/restaurant-finder';
import RestaurantList from '../../components/restaurant-list';

// @Action
import { LocationActions } from '../../data-store/actions/location';
import { RestaurantActions } from '../../data-store/actions/restaurant';

// @Model
import { Restaurant } from '../../models/restaurant';

// @Service
import { getRestaurant } from '../../share/services/restaurant';
import RestaurantDetails from '../../components/restaurant-details';

const radius = 300;
const geocode = {
    latitude: 23.7815271,
    longitude: 90.3982979,
};

function Home() {
    const [showResDetails, setShowResDetails] = useState(false);

    const dispatch = useDispatch();
    const showRestaurantDetails = () => {
        setShowResDetails(true);
    };
    const onCloseRestaurantDetails = () => {
        setShowResDetails(false);
    };

    dispatch({ type: LocationActions.UPDATE_LOCATION_GEOCODE, payload: geocode });
    dispatch({ type: LocationActions.UPDATE_LOCATION_RADIUS, payload: radius });

    function getAllRestaurants() {
        getRestaurant()
            .then((restaurants: Restaurant[]) => {
                dispatch({ type: RestaurantActions.RESTAURANT_LIST, payload: restaurants });
            })
            .catch((error) => {
                console.info('GetAllRestaurants::', error);
            });
    }

    getAllRestaurants();

    return (
        <div className="Home wrapper-container">
            <RestaurantFinder openRestaurantDetails={showRestaurantDetails} />
            <RestaurantList openRestaurantDetails={showRestaurantDetails} />
            {showResDetails ? (
                <RestaurantDetails visible={showResDetails} onClose={onCloseRestaurantDetails} />
            ) : (
                ''
            )}
        </div>
    );
}

export default Home;
