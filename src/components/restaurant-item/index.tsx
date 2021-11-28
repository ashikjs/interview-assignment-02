import React from 'react';
import { Avatar, Button, List } from 'antd';
import './Restaurant-item.scss';
import { useDispatch } from 'react-redux';
import { RestaurantActions } from '../../data-store/actions/restaurant';

export const RestaurantItem = (props: any) => {
    const dispatch = useDispatch();
    let { name, iconUrl, address } = props?.restaurant;

    const openRestaurantDetails = () => {
        props.openRestaurantDetails();
        dispatch({ type: RestaurantActions.SELECTED_RESTAURANT, payload: props?.restaurant });
    };

    return (
        <List.Item.Meta
            className="restaurant-item"
            avatar={<Avatar src={iconUrl} size={80} shape="square" />}
            title={<span>{name}</span>}
            description={
                <>
                    <p style={{ marginBottom: '5px' }}>{address}</p>
                    <Button type="primary" size={'small'} onClick={openRestaurantDetails}>
                        Details
                    </Button>
                </>
            }
        />
    );
};
