import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

function GoogleMapView(props: any) {
    const { lat, lng, zoom, height = '260px', width = '100%' } = props;
    const apiKey = process.env.REACT_APP_MAP_API_KEY;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey ? apiKey : '',
    });
    const renderMap = () => {
        return (
            <GoogleMap mapContainerStyle={{ height, width }} center={{ lat, lng }} zoom={zoom}>
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        );
    };

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    return isLoaded ? renderMap() : <p>Loading...</p>;
}

export default React.memo(GoogleMapView);
