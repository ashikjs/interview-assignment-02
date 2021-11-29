import React from 'react';
import { Avatar, Button, List, Typography } from 'antd';
const { Paragraph } = Typography;
import './Restaurant-item.scss';
import { useDispatch } from 'react-redux';
import { RestaurantActions } from '../../data-store/actions/restaurant';

export const RestaurantItem = (props: any) => {
    const dispatch = useDispatch();
    let { name, iconUrl, address, category } = props?.restaurant;

    const openRestaurantDetails = () => {
        props.openRestaurantDetails();
        dispatch({ type: RestaurantActions.SELECTED_RESTAURANT, payload: props?.restaurant });
    };

    return (
        <List.Item.Meta
            className="restaurant-item"
            avatar={<Avatar src={iconUrl} size={80} shape="square" alt={category} />}
            title={<Paragraph ellipsis={true}>{name}</Paragraph>}
            description={
                <>
                    <Paragraph ellipsis={true}>{address}</Paragraph>
                    <Button type="primary" size={'small'} onClick={openRestaurantDetails}>
                        Details
                    </Button>
                </>
            }
        />
    );
};
