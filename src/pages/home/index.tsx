import React from 'react';
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

const radius = 300;
const geocode = {
    latitude: 23.7815271,
    longitude: 90.3982979,
};

function Home() {
    const dispatch = useDispatch();
    dispatch({ type: LocationActions.UPDATE_LOCATION_GEOCODE, payload: geocode });
    dispatch({ type: LocationActions.UPDATE_LOCATION_RADIUS, payload: radius });

    function getAllRestaurants() {
        getRestaurant()
            .then((restaurants: Restaurant[]) => {
                dispatch({ type: RestaurantActions.RESTAURANT_LIST_SUCCESS, payload: restaurants });
            })
            .catch((error) => {
                console.info('GetAllRestaurants::', error);
            });
    }

    getAllRestaurants();

    return (
        <div className="Home wrapper-container">
            <RestaurantFinder />
            <RestaurantList />
        </div>
    );
}

export default Home;
