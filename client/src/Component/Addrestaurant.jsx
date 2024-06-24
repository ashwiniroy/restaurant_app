import React, { useState } from "react";

const AddRestaurant = ({ onAddRestaurant }) => {
  const [restaurantState, setRestaurantState] = useState({
    name: "",
    location: "",
    latitude: "",
    longitude: ""
  });


  //creating handle submit function that will be triggered on add
  const handleSubmit = async (e) => {
    e.preventDefault();
    onAddRestaurant({
      name: restaurantState.name,
      location: restaurantState.location,
      latitude: parseFloat(restaurantState.latitude),
      longitude: parseFloat(restaurantState.longitude)
    });
    setRestaurantState({ name: "", location: "", latitude: "", longitude: "" });
  };


  // for keeping the uodate on states
  const handleChange = (e) => {
    setRestaurantState({ ...restaurantState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={restaurantState.name}
              onChange={handleChange}
            />
          </div>
          <div className="col ms-2">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              name="location"
              value={restaurantState.location}
              onChange={handleChange}
            />
          </div>
          <div className="col ms-2">
            <input
              type="text"
              className="form-control"
              placeholder="Latitude"
              name="latitude"
              value={restaurantState.latitude}
              onChange={handleChange}
            />
          </div>
          <div className="col ms-2">
            <input
              type="text"
              className="form-control"
              placeholder="Longitude"
              name="longitude"
              value={restaurantState.longitude}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary ms-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
