import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Türkiye'nin 81 ili ve koordinatları
const cities = [
  { name: 'Adana', coordinates: [37.0000, 35.3213] as [number, number] },
  { name: 'Adıyaman', coordinates: [37.7648, 38.2786] as [number, number] },
  { name: 'Afyonkarahisar', coordinates: [38.7507, 30.5567] as [number, number] },
  { name: 'Ağrı', coordinates: [39.7191, 43.0503] as [number, number] },
  { name: 'Amasya', coordinates: [40.6499, 35.8353] as [number, number] },
  { name: 'Ankara', coordinates: [39.9334, 32.8597] as [number, number] },
  { name: 'Antalya', coordinates: [36.8841, 30.7056] as [number, number] },
  { name: 'Artvin', coordinates: [41.1828, 41.8183] as [number, number] },
  { name: 'Aydın', coordinates: [37.8560, 27.8416] as [number, number] },
  { name: 'Balıkesir', coordinates: [39.6484, 27.8826] as [number, number] },
  { name: 'Bilecik', coordinates: [40.1451, 29.9799] as [number, number] },
  { name: 'Bingöl', coordinates: [38.8855, 40.4966] as [number, number] },
  { name: 'Bitlis', coordinates: [38.4006, 42.1095] as [number, number] },
  { name: 'Bolu', coordinates: [40.7391, 31.6113] as [number, number] },
  { name: 'Burdur', coordinates: [37.7765, 30.2886] as [number, number] },
  { name: 'Bursa', coordinates: [40.1885, 29.0610] as [number, number] },
  { name: 'Çanakkale', coordinates: [40.1553, 26.4142] as [number, number] },
  { name: 'Çankırı', coordinates: [40.6013, 33.6134] as [number, number] },
  { name: 'Çorum', coordinates: [40.5506, 34.9556] as [number, number] },
  { name: 'Denizli', coordinates: [37.7765, 29.0864] as [number, number] },
  { name: 'Diyarbakır', coordinates: [37.9144, 40.2306] as [number, number] },
  { name: 'Edirne', coordinates: [41.6818, 26.5623] as [number, number] },
  { name: 'Elazığ', coordinates: [38.6810, 39.2264] as [number, number] },
  { name: 'Erzincan', coordinates: [39.7500, 39.5000] as [number, number] },
  { name: 'Erzurum', coordinates: [39.9000, 41.2700] as [number, number] },
  { name: 'Eskişehir', coordinates: [39.7767, 30.5206] as [number, number] },
  { name: 'Gaziantep', coordinates: [37.0662, 37.3833] as [number, number] },
  { name: 'Giresun', coordinates: [40.9128, 38.3895] as [number, number] },
  { name: 'Gümüşhane', coordinates: [40.4386, 39.5086] as [number, number] },
  { name: 'Hakkari', coordinates: [37.5833, 43.7333] as [number, number] },
  { name: 'Hatay', coordinates: [36.4018, 36.3498] as [number, number] },
  { name: 'Isparta', coordinates: [37.7648, 30.5566] as [number, number] },
  { name: 'Mersin', coordinates: [36.8000, 34.6333] as [number, number] },
  { name: 'İstanbul', coordinates: [41.0082, 28.9784] as [number, number] },
  { name: 'İzmir', coordinates: [38.4237, 27.1428] as [number, number] },
  { name: 'Kars', coordinates: [40.6167, 43.1000] as [number, number] },
  { name: 'Kastamonu', coordinates: [41.3887, 33.7827] as [number, number] },
  { name: 'Kayseri', coordinates: [38.7312, 35.4787] as [number, number] },
  { name: 'Kırklareli', coordinates: [41.7333, 27.2167] as [number, number] },
  { name: 'Kırşehir', coordinates: [39.1425, 34.1709] as [number, number] },
  { name: 'Kocaeli', coordinates: [40.8533, 29.8815] as [number, number] },
  { name: 'Konya', coordinates: [37.8667, 32.4833] as [number, number] },
  { name: 'Kütahya', coordinates: [39.4167, 29.9833] as [number, number] },
  { name: 'Malatya', coordinates: [38.3552, 38.3095] as [number, number] },
  { name: 'Manisa', coordinates: [38.6191, 27.4289] as [number, number] },
  { name: 'Kahramanmaraş', coordinates: [37.5858, 36.9371] as [number, number] },
  { name: 'Mardin', coordinates: [37.3212, 40.7245] as [number, number] },
  { name: 'Muğla', coordinates: [37.2154, 28.3636] as [number, number] },
  { name: 'Muş', coordinates: [38.7432, 41.5064] as [number, number] },
  { name: 'Nevşehir', coordinates: [38.6244, 34.7144] as [number, number] },
  { name: 'Niğde', coordinates: [37.9667, 34.6833] as [number, number] },
  { name: 'Ordu', coordinates: [40.9839, 37.8764] as [number, number] },
  { name: 'Rize', coordinates: [41.0201, 40.5234] as [number, number] },
  { name: 'Sakarya', coordinates: [40.7569, 30.3781] as [number, number] },
  { name: 'Samsun', coordinates: [41.2867, 36.3300] as [number, number] },
  { name: 'Siirt', coordinates: [37.9333, 41.9500] as [number, number] },
  { name: 'Sinop', coordinates: [42.0231, 35.1531] as [number, number] },
  { name: 'Sivas', coordinates: [39.7477, 37.0179] as [number, number] },
  { name: 'Tekirdağ', coordinates: [40.9833, 27.5167] as [number, number] },
  { name: 'Tokat', coordinates: [40.3167, 36.5500] as [number, number] },
  { name: 'Trabzon', coordinates: [41.0015, 39.7178] as [number, number] },
  { name: 'Tunceli', coordinates: [39.1079, 39.5401] as [number, number] },
  { name: 'Şanlıurfa', coordinates: [37.1591, 38.7969] as [number, number] },
  { name: 'Uşak', coordinates: [38.6823, 29.4082] as [number, number] },
  { name: 'Van', coordinates: [38.4891, 43.4089] as [number, number] },
  { name: 'Yozgat', coordinates: [39.8181, 34.8147] as [number, number] },
  { name: 'Zonguldak', coordinates: [41.4564, 31.7987] as [number, number] },
  { name: 'Aksaray', coordinates: [38.3687, 34.0370] as [number, number] },
  { name: 'Bayburt', coordinates: [40.2552, 40.2249] as [number, number] },
  { name: 'Karaman', coordinates: [37.1759, 33.2287] as [number, number] },
  { name: 'Kırıkkale', coordinates: [39.8468, 33.5153] as [number, number] },
  { name: 'Batman', coordinates: [37.8812, 41.1351] as [number, number] },
  { name: 'Şırnak', coordinates: [37.5164, 42.4611] as [number, number] },
  { name: 'Bartın', coordinates: [41.6344, 32.3375] as [number, number] },
  { name: 'Ardahan', coordinates: [41.1105, 42.7022] as [number, number] },
  { name: 'Iğdır', coordinates: [39.9167, 44.0333] as [number, number] },
  { name: 'Yalova', coordinates: [40.6500, 29.2667] as [number, number] },
  { name: 'Karabük', coordinates: [41.2061, 32.6204] as [number, number] },
  { name: 'Kilis', coordinates: [36.7184, 37.1212] as [number, number] },
  { name: 'Osmaniye', coordinates: [37.0742, 36.2470] as [number, number] },
  { name: 'Düzce', coordinates: [40.8438, 31.1565] as [number, number] }
];

// Harita merkezini değiştirmek için özel bileşen
const ChangeView = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const MapScreen: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<typeof cities[0] | null>(null);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[39.9334, 32.8597]} // Türkiye'nin merkezi
        zoom={6}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city) => (
          <Circle
            key={city.name}
            center={city.coordinates}
            radius={selectedCity?.name === city.name ? 15000 : 10000}
            pathOptions={{
              fillColor: selectedCity?.name === city.name ? '#4CAF50' : '#3388ff',
              fillOpacity: 0.7,
              color: selectedCity?.name === city.name ? '#2E7D32' : '#1976D2',
              weight: 2
            }}
            eventHandlers={{
              click: () => setSelectedCity(city)
            }}
          >
            <Popup>
              {city.name}
            </Popup>
          </Circle>
        ))}
        {selectedCity && (
          <ChangeView 
            center={selectedCity.coordinates} 
            zoom={12} 
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MapScreen;