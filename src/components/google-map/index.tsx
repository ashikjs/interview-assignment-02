import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function GoogleMapView(props: any) {
    const { lat, lng, zoom, height = '260px', width = '100%' } = props;
    const apiKey = process.env.REACT_APP_MAP_API_KEY;
    return (
        <LoadScript googleMapsApiKey={`${apiKey}`}>
            <GoogleMap mapContainerStyle={{ height, width }} center={{ lat, lng }} zoom={zoom}>
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapView;
