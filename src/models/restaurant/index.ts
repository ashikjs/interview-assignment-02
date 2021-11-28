import { Geocode } from '../location';

export interface RestaurantState {
    restaurants: Restaurant[];
    selectedRestaurant?: Restaurant | null;
}

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    iconUrl: string;
    geocode: Geocode;
    category: string;
    details?: string;
    contact?: string;
    popularity?: string;
    price?: string;
    rating?: string;
    distance?: string;
}
