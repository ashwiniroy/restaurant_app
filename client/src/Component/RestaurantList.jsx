import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


import restaurantMarker from '../asset/restaurant.png'; // Adjust the path as necessary

const RestaurantList = ({ restaurants, onSearch }) => {
  const [location, setLocation] = useState("");
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default center

  //calling useeefect for setting map on useEffect

  useEffect(() => {
    if (restaurants.length > 0) {
      const { latitude, longitude } = restaurants[0];
      if (latitude && longitude) {
        setMapCenter([latitude, longitude]);
      }
    }
  }, [restaurants]);

  const handleSearch = () => {
    onSearch(location);
  };

  const customIcon = L.icon({
    iconUrl: restaurantMarker,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div>
      <input
        name="locationsearch"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map(el => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants && restaurants.map(el => (
          el.latitude && el.longitude ? (
            <Marker key={el.id} position={[el.latitude, el.longitude]} icon={customIcon}>
              <Popup>
                {el.name} <br /> {el.location}
              </Popup>
            </Marker>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
};

export default RestaurantList;
