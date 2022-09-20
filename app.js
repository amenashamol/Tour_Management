const express = require('express')
const app = express()
const cors=require("cors")
const mongoose=require("mongoose")

//middlewares
 app.use(express.json())
 app.use(cors())
//routes
const tourRoute=require('./routes/tour.route')

 app.get("/",(req,res)=>{
    res.send("route is working")
 })

 //posting to database

 app.use("/api/v1/tour", tourRoute )


module.exports=app