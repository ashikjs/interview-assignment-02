import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'antd';

// @Component
import { RestaurantItem } from '../restaurant-item';

// @Model
import { Restaurant } from '../../models/restaurant';

function RestaurantList(props: any) {
    let restaurants: Restaurant[];
    restaurants = useSelector((state: any) => state?.restaurant?.restaurants);
    if (props.skey) {
        restaurants = restaurants.filter(
            (restaurant) =>
                restaurant.name?.toLowerCase().indexOf(props.skey.toLowerCase()) !== -1 ||
                restaurant.category?.toLowerCase().indexOf(props.skey.toLowerCase()) !== -1
        );
    }
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
