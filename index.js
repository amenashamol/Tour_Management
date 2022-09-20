const mongoose= require("mongoose")
const dotenv=require("dotenv").config()
var multer = require('multer');
const colors=require("colors")


const app = require("./app")

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/tour-management').then(()=>{
     console.log('database connection is successful'.red.bold)
})

//server
const port=process.env.PORT || 8000


app.listen(port,()=>{ 
    console.log('listening',port)
 })
    




