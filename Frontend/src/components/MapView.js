import React from 'react'
import Map, { Marker } from "react-map-gl";


const MapView = () => {

  const MAPBOX_TOKEN ="pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g";


  return (
    <div style={{height:'100vh',width:'100vw'}} >
      <Map
          initialViewState={{
          latitude: 10.8505, // Latitude of Kerala
          longitude: 76.2711, // Longitude of Kerala
          zoom: 8, // Adjust zoom level as needed
          bearing: 0,
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