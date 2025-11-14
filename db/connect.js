const mongoose = require("mongoose");


const connectDB = async(Url)=>{
    try{
        await mongoose.connect(Url);
        console.log("Database connected");
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB