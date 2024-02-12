import React, { useRef } from 'react';
import MapGL, { Marker } from 'react-map-gl';

const MapView = () => {
  const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g';

  // You need to define `startMarker` and `mapRef` before using them in the initialViewState
  const startMarker = {
    coordinates: {
      lat: 37.8,
      long: -122.4,
    },
  };

  const mapRef = useRef();

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v11"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {/* Use the Marker component to add a marker to the map */}
      <Marker
        latitude={startMarker.coordinates.lat}
        longitude={startMarker.coordinates.long}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div>Start</div>
      </Marker>
    </MapGL>
  );
};

export default MapView;

