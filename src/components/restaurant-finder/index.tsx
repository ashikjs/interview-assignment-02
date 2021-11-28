import React from 'react';
import { Button, Input } from 'antd';
const { Search } = Input;
import { useDispatch } from 'react-redux';
import './Restaurant-finder.scss';
import { RestaurantActions } from '../../data-store/actions/restaurant';

function RestaurantFinder() {
    const dispatch = useDispatch();
    const isSearchLoading: boolean = false;
    const getRandomRestaurant = () => {
        dispatch({ type: RestaurantActions.SELECTED_RANDOM_RESTAURANT, payload: '' });
    };
    return (
        <section>
            <div className="restaurant-finder">
                <Button type="primary" size="large" onClick={getRandomRestaurant}>
                    Pick a Random Restaurant
                </Button>
                <span className="alter-text">Or</span>
                <Search
                    placeholder="Search restaurant by key word"
                    loading={isSearchLoading}
                    size="large"
                />
            </div>
        </section>
    );
}

export default RestaurantFinder;
