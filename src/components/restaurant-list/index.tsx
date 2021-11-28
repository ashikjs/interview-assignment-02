import React from 'react';

import { List } from 'antd';
import { RestaurantItem } from '../restaurant-item';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../models/restaurant';

function RestaurantList(props: any) {
    let restaurants: Restaurant[];
    restaurants = useSelector((state: any) => state.restaurant.restaurants);

    return (
        <section>
            <List
                grid={{ gutter: 30, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
                itemLayout="vertical"
                dataSource={restaurants}
                renderItem={(restaurant, index) => (
                    <List.Item key={index} style={{ marginBottom: '30px' }}>
                        <RestaurantItem
                            restaurant={restaurant}
                            openRestaurantDetails={props.openRestaurantDetails}
                        />
                    </List.Item>
                )}
            />
        </section>
    );
}

export default RestaurantList;
