import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// @Component
import RestaurantDetails from './index';

describe('Restaurant Details Component test case', () => {
    const mockRestaurantDetails: any = {
        category: 'Coffee Shop',
        iconUrl: 'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_120.png',
        distance: 1959,
        geocode: {
            latitude: 23.78582613439328,
            longitude: 90.41698591411128,
        },
        address: '53 Gulshan Avenue, Gulshan 2',
        name: 'North End Coffee Roasters @ Cityscape Tower',
    };

    const mockInitialState: any = {
        restaurant: {
            selectedRestaurant: mockRestaurantDetails,
        },
    };

    const mockStore = configureStore();
    let store: any;
    let container: any = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('restaurant details rendering test', () => {
        store = mockStore(mockInitialState);

        act(() => {
            render(
                <Provider store={store}>
                    <RestaurantDetails visible={true} onClose={() => {}} />
                </Provider>,
                container
            );
        });
        expect(screen.getByText(new RegExp(mockRestaurantDetails.name, 'i'))).toBeInTheDocument();
        expect(
            screen.getByText(new RegExp(mockRestaurantDetails.category, 'i'))
        ).toBeInTheDocument();
        expect(
            screen.getByText(new RegExp(mockRestaurantDetails.distance, 'i'))
        ).toBeInTheDocument();
        expect(
            screen.getByText(new RegExp(mockRestaurantDetails.address, 'i'))
        ).toBeInTheDocument();
        const categoryImage = screen.getByAltText(new RegExp(mockRestaurantDetails.category, 'i'));
        expect(categoryImage).toHaveAttribute('src', mockRestaurantDetails.iconUrl);
    });
});
