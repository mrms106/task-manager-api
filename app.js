if(process.env.NODE_ENV !="production"){
  require('dotenv').config();
  }

const express=require("express");
const app= express()
const connectDb=require("./db")
const cors=require("cors")
const taskRouter=require("./routes/task")


// connected to the database
connectDb(process.env.DB_URL)

app.use(express.json())

const corsOptions={
  origin:"*",
  method:'POST,GET,DELETE,PUT'
}
app.use(cors(corsOptions))

app.get("/",(req,res)=>{
    res.send("working the task manager backend server")
})

app.use("/api",taskRouter)

app.listen("8080",()=>{
  console.log("The app is runnig on port 8080")
})