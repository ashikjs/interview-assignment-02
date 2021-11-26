import React from 'react';
import { Avatar, Typography, Space, Drawer } from 'antd';

import './restaurant-details.scss';

import GoogleMapView from '../google-map';

const { Title } = Typography;

function RestaurantDetails(props: any) {
    const restaurant: any = {
        fsq_id: 'object_id',
        categories: [
            {
                id: '457',
                name: 'Asian Restaurant',
                icon: {
                    prefix: 'https://ss3.4sqi.net/img/categories_v2/food/asian_',
                    suffix: '.png',
                },
            },
        ],
        geocodes: {
            main: {
                latitude: 23.793330075666095,
                longitude: 90.40322404501005,
            },
        },
        location: {
            address: 'House #15, Road #17, Block #C, Banani',
            cross_street: 'Mir Showkat Avenue, Gulshan 2',
            locality: 'Dhaka',
            postcode: '1204',
        },
        name: 'Star Kabab & Restaurant',
        popularity: 0.9024184476940382,
        price: 2,
        rating: 7.5,
        tel: '01798-779900',
    };

    const { visible, onClose } = props;
    const {
        name,
        categories,
        geocodes: { main: geocodes },
        location,
        popularity,
        price,
        rating,
        tel,
    } = restaurant;
    const { address, cross_street: crossStreet, locality, postcode } = location;
    return (
        <Drawer
            className={'restaurant-details-drawer'}
            title={`Restaurant details`}
            placement="right"
            width={600}
            onClose={onClose}
            visible={visible}
            style={{ padding: 0 }}
        >
            <GoogleMapView lat={geocodes.latitude} lng={geocodes.longitude} zoom={18} />
            <div className="restaurant-details">
                <Title level={2}>{name}</Title>
                <Title level={5}>
                    {`${address}, ${crossStreet ? crossStreet + ',' : ''}
                    ${locality ? locality + ',' : ''} ${postcode}`}
                </Title>
                {categories?.map((category: any, index: number) => (
                    <Space size={10} className="categories" key={index}>
                        <Avatar src={category.icon.prefix + '120' + category.icon.suffix} />
                        <span>{category.name}</span>
                    </Space>
                ))}

                <ul>
                    {!!tel && (
                        <li>
                            <b>Contact:</b> {tel}
                        </li>
                    )}
                    {!!popularity && (
                        <li>
                            <b>Popularity:</b> {popularity}
                        </li>
                    )}
                    {!!price && (
                        <li>
                            <b>Price:</b> {price}
                        </li>
                    )}
                    {!!rating && (
                        <li>
                            <b>Rating:</b> {rating}
                        </li>
                    )}
                </ul>
            </div>
        </Drawer>
    );
}

export default RestaurantDetails;
