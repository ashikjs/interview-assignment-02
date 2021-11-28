import axios from 'axios';
import { RestaurantDeserialize } from '../../../deserializ/restaurant';

export async function getRestaurant() {
    const locationApi = process.env.REACT_APP_LOCATION_API;

    const URL = `${locationApi}/restaurants`;

    const headers = {
        Accept: 'application/json',
    };

    const results = await axios.get(URL, { headers });

    if (results.status === 200)
        return results.data?.map((res: any) => new RestaurantDeserialize(res));

    return null;
}
