if(process.env.NODE_ENV !="production"){
  require('dotenv').config();
  }

const express=require("express");
const app= express()
const connectDb=require("./db")


// connected to the database
connectDb(process.env.DB_URL)

app.get("/",(req,res)=>{
    res.send("working the task manager backend server")
})


app.listen("8080",()=>{
  console.log("The app is runnig on port 8080")
})