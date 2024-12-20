const express=require("express")
const router=express.Router()
const taskController=require("../controllers/task")

router.get("/alltasks",taskController.showTask);

router.get("/task/:id",taskController.singleTask);

router.post("/addtask",taskController.addTask);

router.post("/updatetask/:id",taskController.updateTask);

router.delete("/deletetask/:id",taskController.deleteTask);

module.exports=router;