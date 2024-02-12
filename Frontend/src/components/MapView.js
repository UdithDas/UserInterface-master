import React from 'react'
import Map, { Marker } from "react-map-gl";
import mapboxgl from 'mapbox-gl';

const MapView = () => {

  const MAPBOX_TOKEN ="pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g";


  return (
    <div>
      <Map
          initialViewState={{
            // latitude: startMarker.coordinates.lat,
            // longitude: startMarker.coordinates.long,
            // latitude: 37.8,
            // longitude: -122.4,
            zoom: 8,
            bearing: 5,
          }}
          // ref={mapRef}
          style={{ width: "100vw", height: "300%" }}
          mapStyle={"mapbox://styles/mapbox/light-v11"}
          mapboxAccessToken={MAPBOX_TOKEN}
        />

    </div>
  )
}

export default MapView