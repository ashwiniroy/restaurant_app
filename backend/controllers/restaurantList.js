const db = require("../db/index");

//contoleer for getting all restaurants
const  restaurantList= async(req,res)=>{
try {
        await db.query(
            "select * from restaurants"
        ).then((results)=>{
          res.status(200).json(results.rows);
        }).catch((error)=>res.send(error.message))
        
    } catch (error) {
        console.log(error);
    }
}


module.exports={restaurantList}