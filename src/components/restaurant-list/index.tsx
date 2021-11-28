import React, { useState } from 'react';

import { List } from 'antd';
import { RestaurantItem } from '../restaurant-item';
import RestaurantDetails from '../restaurant-details';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../models/restaurant';

function RestaurantList() {
    const [visible, setVisible] = useState(false);
    let restaurants: Restaurant[];
    restaurants = useSelector((state: any) => state.restaurant.restaurants);
    const showRestaurantDetails = () => {
        setVisible(true);
    };
    const onCloseRestaurantDetails = () => {
        setVisible(false);
    };

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
                            openRestaurantDetails={showRestaurantDetails}
                        />
                    </List.Item>
                )}
            />
            {visible ? (
                <RestaurantDetails visible={visible} onClose={onCloseRestaurantDetails} />
            ) : (
                ''
            )}
        </section>
    );
}

export default RestaurantList;
