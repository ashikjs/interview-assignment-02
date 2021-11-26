import React, { useState } from 'react';

import { List } from 'antd';
import { RestaurantItem } from '../restaurant-item';
import RestaurantDetails from '../restaurant-details';

function RestaurantList() {
    const [visible, setVisible] = useState(false);
    const restaurants = [
        {
            id: '4bf390083f86c9b6ce4ab21c',
            imgUrl: 'https://ss3.4sqi.net/img/categories_v2/food/default_120.png',
            distance: 1404,
            geocodes: {
                main: {
                    latitude: 23.793330075666095,
                    longitude: 90.40322404501005,
                },
            },
            address: 'House #15, Road #17, Block #C, Banani',
            name: 'Rock Restaurant',
        },
        {
            id: '4bf390083f86c9b6ce4ab21c',
            imgUrl: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_120.png',
            distance: 1404,
            geocodes: {
                main: {
                    latitude: 23.793330075666095,
                    longitude: 90.40322404501005,
                },
            },
            address: 'House #15, Road #17, Block #C, Banani',
            name: 'Ruchita Bar & Restaurant',
        },
        {
            id: '4bf390083f86c9b6ce4ab21c',
            imgUrl: 'https://ss3.4sqi.net/img/categories_v2/food/asian_120.png',
            distance: 1404,
            geocodes: {
                main: {
                    latitude: 23.793330075666095,
                    longitude: 90.40322404501005,
                },
            },
            address: 'House #15, Road #17, Block #C, Banani',
            name: 'Star Kabab & Restaurant',
        },
        {
            id: '4bf390083f86c9b6ce4ab21c',
            imgUrl: 'https://ss3.4sqi.net/img/categories_v2/food/indian_120.png',
            distance: 1404,
            geocodes: {
                main: {
                    latitude: 23.793330075666095,
                    longitude: 90.40322404501005,
                },
            },
            address: 'House #15, Road #17, Block #C, Banani',
            name: 'Star Kabab & Restaurant',
        },
    ];

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
