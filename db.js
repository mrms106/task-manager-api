const mongoose=require("mongoose")

const connectDb=async(DBurl)=>{
    await mongoose.connect(DBurl);
    console.log("connected to database")
}

module.exports=connectDb