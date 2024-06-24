const db = require("../db")

//controller for finding a location by location
const findRestaurantByLocation = async (req,res)=>{
    try {
          const location = req.body.location
    await db.query(`SELECT * FROM restaurants WHERE location LIKE '%'||$1||'%'`, [location])
               .then((results)=>{
                 res.status(200).json(results.rows);  
               })
               .catch((error)=>res.send(error.message))
    } catch (error) {
       console.log(error); 
    }
}


module.exports={findRestaurantByLocation}