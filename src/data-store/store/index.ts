import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import { loggerMiddleware } from '../../middleware';

export default function configureStore(initialState?: any) {
    const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware);

    const store = createStore(rootReducer as any, initialState as any, middleware);

    return store;
}
