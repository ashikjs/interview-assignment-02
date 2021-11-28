export interface LocationConfiguration {
    geocode: Geocode;
    radius: number;
    categories?: number;
    sort?: string;
    limit?: number;
}

export interface Geocode {
    latitude: number;
    longitude: number;
}
