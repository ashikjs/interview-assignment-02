import React from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import './Restaurant-finder.scss';
import { RestaurantActions } from '../../data-store/actions/restaurant';

function RestaurantFinder(props: any) {
    const dispatch = useDispatch();
    const getRandomRestaurant = () => {
        dispatch({ type: RestaurantActions.SELECTED_RANDOM_RESTAURANT, payload: '' });
        props.openRestaurantDetails();
    };
    const onChange = (e: any) => {
        props.onSearchRestaurant(e.target.value);
    };
    return (
        <section>
            <div className="restaurant-finder">
                <Button type="primary" size="large" onClick={getRandomRestaurant}>
                    Pick a Random Restaurant
                </Button>
                <span className="alter-text">Or</span>
                <Input
                    allowClear
                    onChange={onChange}
                    placeholder="Search restaurant by name"
                    size="large"
                />
            </div>
        </section>
    );
}

export default RestaurantFinder;
