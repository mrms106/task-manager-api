if(process.env.NODE_ENV !="production"){
  require('dotenv').config();
  }

const express=require("express");
const app= express()
const connectDb=require("./db")
const cors=require("cors")
const taskRouter=require("./routes/task")
const passport=require("passport")
const session=require("express-session")
const User=require("./modules/user")
const authRoute=require("./routes/user")

// connected to the database
connectDb(process.env.DB_URL)

// parse json
app.use(express.json())

// cors configuration
const corsOptions={
  origin:"*",
  method:'POST,GET,DELETE,PUT'
}
app.use(cors(corsOptions))

// creating session
const sessionOptions={
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{
    expires:Date.now()+ 2*24*60*60*1000,
    maxAge: 24 * 60 * 60 * 1000,
}
}
app.use(session(sessionOptions))

// user initialization
app.use(passport.initialize());
app.use(passport.session());

// Passport strategies for User 
passport.use(User.createStrategy())

// Serialize and deserialize logic
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.get("/",(req,res)=>{
    res.send("working the task manager backend server")
})

app.use("/api",taskRouter)
app.use("/auth",authRoute)

app.listen("8080",()=>{
  console.log("The app is runnig on port 8080")
})