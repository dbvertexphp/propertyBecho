"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import ReactDOMServer from "react-dom/server";

// Create a FontAwesome marker using divIcon + React
const customIcon = L.divIcon({
  html: ReactDOMServer.renderToString(
    <FaMapMarkerAlt className="text-red-600 text-3xl" /> // Tailwind styling
  ),
  className: "custom-fa-icon", // prevents default leaflet styles
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// 🔹 Handles map clicks & updates marker position
function LocationMarker({ setPosition }: { setPosition: (pos: [number, number]) => void }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function Map() {
  const [position, setPosition] = useState<[number, number] | null>([28.6139, 77.2090]); // Default: Delhi

  return (
    <MapContainer
      center={position || [28.6139, 77.2090]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      {/* Map tiles */}
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker */}
      {position && (
        <Marker position={position} icon={customIcon}>
          <Popup>
            📍 Pinned Location <br />
            {position[0].toFixed(4)}, {position[1].toFixed(4)}
          </Popup>
        </Marker>
      )}

      {/* Listen for clicks */}
      <LocationMarker setPosition={setPosition} />
    </MapContainer>
  );
}
