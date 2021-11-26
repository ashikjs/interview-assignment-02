export interface LocationState {
    geocode: Geocode;
    radius: number;
}

export interface Geocode {
    latitude: number;
    longitude: number;
}
