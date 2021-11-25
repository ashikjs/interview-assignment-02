import React from 'react';
import { Button, Input } from 'antd';
const { Search } = Input;
import './Restaurant-finder.scss';

function RestaurantFinder() {
    const isSearchLoading: boolean = false;

    return (
        <section>
            <div className="restaurant-finder">
                <Button type="primary" size="large">
                    Random Restaurant
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
