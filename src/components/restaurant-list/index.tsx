import React from 'react';
import { List } from 'antd';
import { RestaurantItem } from '../restaurant-item';

function RestaurantList() {
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

    return (
        <section>
            <List
                itemLayout="vertical"
                dataSource={restaurants}
                renderItem={(restaurant) => (
                    <List.Item>
                        <RestaurantItem restaurant={restaurant} />
                    </List.Item>
                )}
            />
        </section>
    );
}

export default RestaurantList;
