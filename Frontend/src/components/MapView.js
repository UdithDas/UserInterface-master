import React, { useEffect, useState } from 'react'
import Map, { Marker } from "react-map-gl";
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import "mapbox-gl/dist/mapbox-gl.css";

const MapView = () => {
  const [trigger, setTrigger] = useState(false);
const navigate = useNavigate();



  const MAPBOX_TOKEN ="pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g";


  return (
    
    <div style={{height:'100vh',width:'100vw'}} >
      <Map
          initialViewState={{
            latitude: 10.5276, // Latitude of Thrissur, Kerala
            longitude: 76.2144, // Longitude of Thrissur, Kerala
            zoom: 10, // Adjust zoom level as needed
            bearing: 0,
          }}
          // ref={mapRef}
          style={{ width: "100vw", height: "300%" }}
          mapStyle={"mapbox://styles/mapbox/light-v11"}
          mapboxAccessToken={MAPBOX_TOKEN}
        >
         <Marker latitude={9.9312} longitude={76.2673}>
  <div style={{ color: 'red', fontSize: 24,zIndex: 999 }}>
    <span role="img" aria-label="marker">📍</span>
  </div>
</Marker>
        </Map>

    </div>
  )
}

export default MapView