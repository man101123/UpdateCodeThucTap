import React from 'react'

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './GSMMap.css'

const containerStyle={
    with: '1200px',
    height: '150px'
};

const center = {
    lat: 10.80,
    lng: 106.70
};

export default function GSMMap () {
    return(
        <div className="map">
            <LoadScript
            googleMapsApiKey="AIzaSyDbczLU679AT0Tub28jLlfTNAmyhDtq77Q"
            >

                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                />
            </LoadScript>
        </div>
    );
}