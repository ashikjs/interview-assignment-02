import { Restaurant } from '../../models/restaurant';
import { Geocode } from '../../models/location';

export class RestaurantDeserialize implements Restaurant {
    id: string;

    name: string;

    address: string;

    iconUrl: string;

    geocode: Geocode;

    details?: string;

    category: string;

    contact?: string;

    popularity?: string;

    price?: string;

    rating?: string;

    distance?: string;

    constructor(restaurantBackendData: any) {
        this.id = restaurantBackendData.fsq_id;
        this.name = restaurantBackendData.name;
        this.address = this.generateAddress(restaurantBackendData.location);
        this.geocode = restaurantBackendData.geocodes.main;
        this.iconUrl = restaurantBackendData.categories[0]
            ? this.generateCategoryIconUrl(restaurantBackendData.categories[0])
            : '';
        this.distance = (restaurantBackendData.distance / 1000).toFixed(2);
        this.category = restaurantBackendData.categories[0]
            ? restaurantBackendData.categories[0].name
            : null;
    }

    private generateAddress(loc: any): string {
        const crossStreet = loc.cross_street ? ' ' + loc.cross_street : '';
        const locality = loc.locality ? ' ' + loc.locality : '';
        return loc?.address ? loc?.address : loc.country + crossStreet + locality;
    }

    private generateCategoryIconUrl(category: any): string {
        return category.icon.prefix + '120' + category.icon.suffix;
    }
}
