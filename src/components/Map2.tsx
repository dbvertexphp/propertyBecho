"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression, DivIcon } from "leaflet";

type MarkerData = {
  id: number;
  position: LatLngExpression;
  title: string;
  price: number | string;
};

type MapProps = {
  center: LatLngExpression;
  markers: MarkerData[];
};

// ✅ Custom location pin (red)
const customPinIcon: DivIcon = L.divIcon({
  className: "custom-pin",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="32" height="32">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
      9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 
      6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
    </svg>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Maps({ center, markers }: MapProps) {
  return (
    <MapContainer center={center} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customPinIcon}>
          <Popup>
            <div className="w-40">
              <p className="font-bold">{marker.title}</p>
              <p>{marker.price}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
