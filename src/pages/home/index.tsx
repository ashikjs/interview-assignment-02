import React from 'react';
import RestaurantFinder from '../../components/restaurant-finder';
import RestaurantList from '../../components/restaurant-list';

function Home() {
    return (
        <div className="Home wrapper-container">
            <RestaurantFinder />
            <RestaurantList />
        </div>
    );
}

export default Home;
