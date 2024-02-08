import React from 'react';
import ReactMapGL from 'react-map-gl';

const MapComponent = () => {
  return (
    <ReactMapGL
      mapLib={import('mapbox-gl')}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default MapComponent;
