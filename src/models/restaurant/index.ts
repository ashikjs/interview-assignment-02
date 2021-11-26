export interface RestaurantState {
    restaurants: Restaurant[];
    selectedRestaurant?: Restaurant | null;
}

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    iconUrl: string;
    details?: string;
    category?: string;
    contact?: string;
    popularity?: string;
    price?: string;
    rating?: string;
}