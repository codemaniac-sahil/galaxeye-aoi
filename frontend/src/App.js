import React, { useState } from "react";

import { MapContainer, TileLayer, FeatureGroup, Polygon } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

export default function App() {

  const [tiles, setTiles] = useState([]);

  const handleCreated = async (e) => {
    const layer = e.layer;
    const aoi = layer.toGeoJSON().geometry;

    console.log("AOI is:", aoi)
    const response = await fetch('http://localhost:5000/api/tiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ aoi })
    });
    const data = await response.json();
    // console.log("Tile:", data);
    const polygons = data.flatMap(item =>
      item.features.map(feature => ({
        positions: feature.geometry.coordinates[0],
        key: feature._id
      }))
    );
    // console.log("Polygons",polygons)
    setTiles(polygons);

  };

  return (
    <MapContainer center={[15.3173, 75.7139]} zoom={7} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FeatureGroup>
        <EditControl
          position='topright'
          onCreated={handleCreated}
          draw={{
            rectangle: true,
            polygon: true,
            circle: false,
            polyline: false,
            circlemarker: false,
            marker: false
          }}
        />
      </FeatureGroup>
      {tiles.length !== 0 && tiles.map((tile, index) => (
        <Polygon
          // key={index}
          positions={tile.positions.map(([lng, lat]) => [lat, lng])}
          pathOptions={{ color: 'red' }}
        />
      ))}
    </MapContainer>
  );


};
