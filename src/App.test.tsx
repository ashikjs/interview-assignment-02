import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('With React Testing Library', () => {
    const mockStore = configureStore();
    let store;

    it('Shows "Pick a Random Restaurant" Button', () => {
        store = mockStore();
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const buttonText = screen.getByText(/Pick a Random Restaurant/i);
        const searchInput = screen.getByPlaceholderText(/Search restaurant by name/i);
        expect(buttonText).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
    });
});
