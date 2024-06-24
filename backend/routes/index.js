const express = require("express");
const { restaurantList } = require("../controllers/restaurantList");
const {findRestaurantByLocation } = require("../controllers/findRestaurantByLocation");
const {addRestauarnt} = require("../controllers/addRestaurant")


const router = express.Router();

//creating routes for all three controllers that will be consumed by client

router.get("/restaurantList", restaurantList);
router.post("/addRestaurant",addRestauarnt);
router.post("/findRestaurantsByLocation", findRestaurantByLocation);

module.exports = router;
