import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// @Component
import { RestaurantItem } from './index';

describe('Restaurant Item Component test case', () => {
    const mockRestaurant: any = {
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

    it('restaurant item rendering test', () => {
        store = mockStore();

        act(() => {
            render(
                <Provider store={store}>
                    <RestaurantItem restaurant={mockRestaurant} />
                </Provider>,
                container
            );
        });

        expect(screen.getByText(new RegExp(mockRestaurant.name, 'i'))).toBeInTheDocument();
        expect(screen.getByText(new RegExp(mockRestaurant.address, 'i'))).toBeInTheDocument();
        const categoryImage = screen.getByAltText(new RegExp(mockRestaurant.category, 'i'));
        expect(categoryImage).toHaveAttribute('src', mockRestaurant.iconUrl);
    });

    it('restaurant item details button event fire test', () => {
        let isClickedDetailsButton: boolean = false;

        act(() => {
            render(
                <Provider store={store}>
                    <RestaurantItem
                        restaurant={mockRestaurant}
                        openRestaurantDetails={() =>
                            (isClickedDetailsButton = !isClickedDetailsButton)
                        }
                    />
                </Provider>,
                container
            );
        });

        const button = document.querySelector('.ant-btn.ant-btn-primary.ant-btn-sm');
        expect(isClickedDetailsButton).toBe(false);

        act(() => {
            button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(isClickedDetailsButton).toBe(true);
    });
});
