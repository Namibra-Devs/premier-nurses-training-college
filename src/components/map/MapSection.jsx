import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapSection = () => {
  const [blink, setBlink] = useState(true);
  const collegeLocation = [6.7265049, -1.6069171,17]; // Coordinates for P9GW+H7V Kumasi

  // Blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Custom blinking marker icon
  const blinkingIcon = new L.DivIcon({
    html: `
      <div style="position: relative;">
        <div style="
          width: 24px;
          height: 24px;
          background: ${blink ? '#e53e3e' : '#f56565'};
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          transform: translate(-50%, -50%);
          animation: pulse 1.5s infinite;
        "></div>
        <img 
          src="${icon}" 
          style="
            width: 25px;
            height: 41px;
            position: absolute;
            left: 0;
            top: 0;
            transform: translate(-50%, -100%);
          "
          alt="marker"
        />
      </div>`,
    className: 'blinking-marker',
    iconSize: [25, 41]
  });

  return (
    <section className="px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
      <div className="container mx-auto">
        {/* Title */}
        <h3 className="text-primary text-xl text-center uppercase font-medium mb-8">
            We Are{" "}
            <span className="text-yellow-400 font-semibold">HERE!</span>
        </h3>
        
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <MapContainer 
            center={collegeLocation} 
            zoom={17} 
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={collegeLocation} icon={blinkingIcon}>
              <Popup>
                <div className="font-sans">
                  <h3 className="font-bold text-blue-800">Premier Nurses' Training College</h3>
                  <p className="text-gray-700">P9GW+H7V, Unnamed Road, Kumasi</p>
                  <a 
                    href="https://www.google.com/maps?q=6.6729,-1.5923" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-1 inline-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Visit us at our campus located in the heart of Kumasi
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${blink ? 'bg-red-500' : 'bg-red-300'}`}></span>
            <span className="text-sm text-gray-700">Our location marker</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
            70% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.3; }
            100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
        }
        .leaflet-popup-content-wrapper {
            border-radius: 8px !important;
        }
        `}
        </style>
    </section>
  );
};

export default MapSection;