
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

interface ContactMapProps {
  fullWidth?: boolean;
}

const ContactMap: React.FC<ContactMapProps> = ({ fullWidth = false }) => {
  // Fix the position type to be a proper LatLngTuple
  const position: [number, number] = [-34.7544, 149.7188];
  
  return (
    <div className={`glass-card rounded-xl overflow-hidden ${fullWidth ? 'container mx-auto px-4' : ''}`}>
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: fullWidth ? '400px' : '300px', width: '100%' }}
        className="rounded-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            R Judd Enterprise <br /> We are located here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
