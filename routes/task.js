const express=require("express")
const router=express.Router()
const taskController=require("../controllers/task")

router.get("/tasks",taskController.showTask);

router.get("/tasks/:id",taskController.singleTask);

router.post("/tasks",taskController.addTask);

router.put("/tasks/:id",taskController.updateTask);

router.delete("/tasks/:id",taskController.deleteTask);

module.exports=router;