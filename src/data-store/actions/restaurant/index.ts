import { Action } from 'redux-actions';
import { Restaurant } from '../../../models/restaurant';

export enum RestaurantActions {
    RESTAURANT_LIST = '[RESTAURANT] List',
    SELECTED_RANDOM_RESTAURANT = '[RESTAURANT] Random Selected',
    SELECTED_RESTAURANT = '[RESTAURANT] Selected',
}

export class RestaurantListType implements Action<Restaurant[]> {
    readonly type = RestaurantActions.RESTAURANT_LIST;

    constructor(public payload: Restaurant[]) {}
}

export class SelectedRandomRestaurantType implements Action<any> {
    readonly type = RestaurantActions.SELECTED_RANDOM_RESTAURANT;

    constructor(public payload: any) {}
}

export class SelectedRestaurantType implements Action<Restaurant> {
    readonly type = RestaurantActions.SELECTED_RESTAURANT;

    constructor(public payload: Restaurant) {}
}

export type RestaurantActionTypes =
    | RestaurantListType
    | SelectedRandomRestaurantType
    | SelectedRestaurantType;
