


const mongoose = require("mongoose");

exports.dbconnect = async()=>{
       try{
        await mongoose.connect('mongodb://0.0.0.0:27017/studentmanagement',{
           useNewUrlParser :true,
        useUnifiedTopology:true,
       });
       console.log("db connected successfully");
    }
    catch{
        console.log("db connection failed ");
    }
}
