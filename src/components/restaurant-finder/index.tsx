import React, { useCallback } from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';

// @Style
import './Restaurant-finder.scss';
// @Action
import { RestaurantActions } from '../../data-store/actions/restaurant';
// Constant
import { debounce } from '../../constant/debounce';

function RestaurantFinder(props: any) {
    const dispatch = useDispatch();
    const getRandomRestaurant = () => {
        dispatch({ type: RestaurantActions.SELECTED_RANDOM_RESTAURANT, payload: '' });
        props.openRestaurantDetails();
    };
    const onChange = useCallback(
        debounce((e: any): any => props.onSearchRestaurant(e.target.value), 600),
        []
    );
    return (
        <section>
            <div className="restaurant-finder">
                <Button
                    type="primary"
                    size="large"
                    onClick={getRandomRestaurant}
                    data-testid="randomRestaurant"
                >
                    Pick a Random Restaurant
                </Button>
                <span className="alter-text">Or</span>
                <Input
                    allowClear
                    onChange={onChange}
                    placeholder="Search by name or category"
                    size="large"
                />
            </div>
        </section>
    );
}

export default RestaurantFinder;
