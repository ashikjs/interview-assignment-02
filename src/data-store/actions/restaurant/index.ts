import { Action } from 'redux-actions';
import { Restaurant } from '../../../models/restaurant';

export enum RestaurantActions {
    RESTAURANT_LIST = '[RESTAURANT] List',
    RESTAURANT_LIST_SUCCESS = '[RESTAURANT] List Success',
    SELECTED_RESTAURANT = '[RESTAURANT] Selected',
}

export class RestaurantListType implements Action<any> {
    readonly type = RestaurantActions.RESTAURANT_LIST;

    constructor(public payload: string) {}
}

export class RestaurantListSuccessType implements Action<Restaurant[]> {
    readonly type = RestaurantActions.RESTAURANT_LIST_SUCCESS;

    constructor(public payload: Restaurant[]) {}
}
export class SelectedRestaurantType implements Action<Restaurant> {
    readonly type = RestaurantActions.SELECTED_RESTAURANT;

    constructor(public payload: Restaurant) {}
}

export type RestaurantActionTypes =
    | RestaurantListType
    | RestaurantListSuccessType
    | SelectedRestaurantType;
