const mongoose= require("mongoose")
const dotenv=require("dotenv").config()
var multer = require('multer');
const colors=require("colors")


const app = require("./app")

//database connection
mongoose.connect(process.env.DATABASE_LOCAl).then(()=>{
     console.log('database connection is successful'.red.bold)
})

//server
const port=process.env.PORT || 8000


app.listen(port,()=>{ 
    console.log('listening',port)
 })
    




