import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

// @Component
import RestaurantFinder from './index';

describe('Restaurant Finder Component test case', () => {
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

    it('Shows "Pick a Random Restaurant" Button', () => {
        store = mockStore();
        render(
            <Provider store={store}>
                <RestaurantFinder />
            </Provider>
        );
        const buttonText = screen.getByText(/Pick a Random Restaurant/i);
        expect(buttonText).toBeInTheDocument();
    });

    it('Shows "Search by name or category" Input', () => {
        store = mockStore();
        render(
            <Provider store={store}>
                <RestaurantFinder />
            </Provider>
        );
        const searchInput = screen.getByPlaceholderText(/Search by name or category/i);
        expect(searchInput).toBeInTheDocument();
    });

    it('check pick a random restaurant button clicked even fire', () => {
        let isClickedRandomRestaurantButton: boolean = false;
        act(() => {
            render(
                <Provider store={store}>
                    <RestaurantFinder
                        openRestaurantDetails={() => (isClickedRandomRestaurantButton = true)}
                    />
                </Provider>,
                container
            );
        });

        const button = document.querySelector('[data-testid=randomRestaurant]');
        expect(isClickedRandomRestaurantButton).toBe(false);

        act(() => {
            button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(isClickedRandomRestaurantButton).toBe(true);
    });

    it('check on changes restaurant search input value event fire', () => {
        let searchKeyWord: string = '';
        const inputValue: string = 'restaurant';
        act(() => {
            render(
                <Provider store={store}>
                    <RestaurantFinder
                        onSearchRestaurant={(sKey: string) => (searchKeyWord = sKey)}
                    />
                </Provider>,
                container
            );
        });

        userEvent.type(screen.getByPlaceholderText(/Search by name or category/i), inputValue);
        expect(searchKeyWord).toBe(inputValue);
    });
});
