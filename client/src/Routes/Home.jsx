import React, { useState, useEffect } from 'react';
import Header from '../Component/Header';
import AddRestaurant from '../Component/Addrestaurant';
import RestaurantList from '../Component/RestaurantList';
import axios from 'axios';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  //fetching all restaurants
  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URI}/api/restaurantList`);
      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //adding a restaurant and refreshing table view 
  const handleAddRestaurant = async (newRestaurant) => {
    try {
      await axios.post(`${process.env.REACT_APP_URI}/api/addRestaurant`, newRestaurant);
      fetchRestaurants();
    } catch (error) {
      console.error(error);
    }
  };


  // finding restaurant by location
  const handleSearch = async (location) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_URI}/api/findRestaurantsByLocation`, { location });
      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <AddRestaurant onAddRestaurant={handleAddRestaurant} />
      </div>
      <div className="container mt-4">
        <RestaurantList restaurants={restaurants} onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
