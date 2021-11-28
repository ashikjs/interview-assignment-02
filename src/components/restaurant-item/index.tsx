import React from 'react';
import { Avatar, Button, List } from 'antd';
import './Restaurant-item.scss';

export const RestaurantItem = (props: any) => {
    let { name, iconUrl, address } = props?.restaurant;
    return (
        <List.Item.Meta
            className="restaurant-item"
            avatar={<Avatar src={iconUrl} size={80} shape="square" />}
            title={<span>{name}</span>}
            description={
                <>
                    <p style={{ marginBottom: '5px' }}>{address}</p>
                    <Button type="primary" size={'small'} onClick={props.openRestaurantDetails}>
                        Details
                    </Button>
                </>
            }
        />
    );
};
