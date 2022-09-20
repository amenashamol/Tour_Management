const { MongoClient } = require("mongodb");
const connectionString=process.env.ATLAS_URI 
const client=new MongoClient(connectionString,{
  useNewParse:true,
  useUnifieldTopology:true,
})

let dbConnection
module.exports={
    connectToServer: function(callback){
        client.connect(function (err,db){
          if(err || db){
            return callback(err)
          }

          dbConnection=db.db("sample_airbnb")
          console.log(" successfully Connected to mongodb")
          return callback()
        })
    },

    getDb: function (){
        return dbConnection
    },
}




