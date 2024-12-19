const express=require("express");
const app= express()


app.get("/",(req,res)=>{
    res.send("working the task manager backend server")
})


app.listen("8080",()=>{
  console.log("The app is runnig on port 8080")
})