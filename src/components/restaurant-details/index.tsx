import React from 'react';
import { Avatar, Typography, Space, Drawer } from 'antd';

import './restaurant-details.scss';

import GoogleMapView from '../google-map';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../models/restaurant';

const { Title } = Typography;

function RestaurantDetails(props: any) {
    const mapZoomLevel: number = 16;
    const restaurant: Restaurant = useSelector((state: any) => state.restaurant.selectedRestaurant);

    const { visible, onClose } = props;
    const { name, category, geocode, address, popularity, price, rating, iconUrl } = restaurant;
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
            <GoogleMapView lat={geocode.latitude} lng={geocode.longitude} zoom={mapZoomLevel} />
            <div className="restaurant-details">
                <Title level={2}>{name}</Title>
                <Title level={5}>{address}</Title>

                <Space size={10} className="categories">
                    <Avatar src={iconUrl} />
                    <span>{category}</span>
                </Space>

                <ul>
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
