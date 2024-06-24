const db = require("../db/index");

//controller for adding restaurant
const  addRestauarnt = async(req,res)=>{
try {
        const {name,location,latitude,longitude}=req.body;
    await db.query("INSERT INTO restaurants (name,location,latitude,longitude) VALUES ($1,$2,$3,$4) returning *",[name,location,latitude,longitude])
               .then((results)=>{
                 res.status(200).json(results.rows[0]);  
               })
               .catch((error)=>res.send(error.message))
    } catch (error) {
       console.log(error); 
    }
}



module.exports = {addRestauarnt};