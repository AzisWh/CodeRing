import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

const position: [number, number] = [-6.982321327298112, 110.40932342290992];

const Map: React.FC = () => {
  return (
    <div className="w-full h-100 rounded-xl overflow-hidden shadow-sm">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-sm">
              <strong>Codering Office</strong>
              <br />
              Jl. Imam Bonjol No.207
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
