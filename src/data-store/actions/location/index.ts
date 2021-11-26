import { Action } from 'redux-actions';
import { Geocode } from '../../../models/location';

export enum LocationActions {
    UPDATE_LOCATION_GEOCODE = '[LOCATION] Update Geocode',
    UPDATE_LOCATION_RADIUS = '[LOCATION] Update Radius',
}

export class UpdateLocationGeocodeType implements Action<Geocode> {
    readonly type = LocationActions.UPDATE_LOCATION_GEOCODE;

    constructor(public payload: Geocode) {}
}

export class UpdateLocationRadiusType implements Action<Geocode> {
    readonly type = LocationActions.UPDATE_LOCATION_RADIUS;

    constructor(public payload: Geocode) {}
}

export type LocationActionTypes = UpdateLocationRadiusType | UpdateLocationGeocodeType;
