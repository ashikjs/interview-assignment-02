import React from 'react';
import { Avatar, Button, List } from 'antd';
import './Restaurant-item.scss';

export const RestaurantItem = (props: any) => {
    let { name, imgUrl, address } = props?.restaurant;
    return (
        <List.Item.Meta
            className="restaurant-item"
            avatar={<Avatar src={imgUrl} size={80} shape="square" />}
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
