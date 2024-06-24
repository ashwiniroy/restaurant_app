// creating connectivity with Postgres Databse

const {Pool} =require("pg")
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:"ASHWINI",
    port:5432

});

module.exports =pool;