const express=require("express")
const router=express.Router()
const taskController=require("../controllers/task")
const isLoggedIn=require("../middelware/islogedIn")

router.get("/tasks",taskController.showTask);

router.get("/tasks/:id",taskController.singleTask);

router.post("/tasks",isLoggedIn,taskController.addTask);

router.put("/tasks/:id",isLoggedIn,taskController.updateTask);

router.delete("/tasks/:id",isLoggedIn,taskController.deleteTask);

module.exports=router;