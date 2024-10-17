import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapComponentProps {
  latitude: string;  
  longitude: string;
  address: string
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude  , address , }) => {
  const position: [number, number] = [parseFloat(latitude), parseFloat(longitude)];

  return (
    <MapContainer  center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <b>{address}</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
