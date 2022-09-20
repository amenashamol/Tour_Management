const mongoose=require("mongoose")

// schema design 
const tourSchema=mongoose.Schema({
    name:{
        type: String,
        required:[true, "please provide a name for this tour."],
        trim:true,
        unique:[true,"name must be unique"],
        minLength:[3, "Name must be  at least 3 charecter"],
        maxLength:[100, "name is too larger"]
    },
    // image:{
    //     type:Image
    //     // required:true
    // },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:[0,"price can't be negative"]
    },
      
    

    status:{
        type:String,
        required:true,
        enum:{
            values:['available', 'not-available'],
            message:"status can't be {VALUE}"
        }
    },
    
  }, {
    timestamps:true,
  })

 

  //SCHEMA -> MODEL -> QUERY

  const tour=mongoose.model('tour', tourSchema)

  module.exports=tour