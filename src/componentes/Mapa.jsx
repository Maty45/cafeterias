import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import customIcon from '../imagenes/icono.png'
import '../stylesheets/mapa.css'
import L from 'leaflet';

function Mapa({ marcadores }) {
  const customMarkerIcon = new L.Icon({
    iconUrl: customIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="contenedor-principal-mapa">
      <MapContainer center={[-32.89102673278495, -68.839474890840460]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marcadores.map((marcador, index) => (
          <Marker key={index} position={[parseFloat(marcador.lat), parseFloat(marcador.lon)]} icon={customMarkerIcon}>
            <Popup>
              <div>
                <strong>Nombre:</strong> {marcador.display_name}<br />
                <strong>Latitud:</strong> {marcador.lat}<br />
                <strong>Longitud:</strong> {marcador.lon}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;
