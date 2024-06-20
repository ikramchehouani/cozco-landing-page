import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Leaflet from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = Leaflet.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const MapSection = () => {
  const locations = [

    { lat: 48.8588443, lng: 2.2943506, name: "Eiffel Tower" },
  ];

  return (
    <MapContainer center={[48.8588443, 2.2943506]} zoom={13} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            <a href={`https://www.google.com/maps?q=${location.lat},${location.lng}`} target="_blank" rel="noopener noreferrer">
              {location.name}
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapSection;
