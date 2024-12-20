const Task = require("../modules/tasks")

module.exports.showTask = async (req, res) => {
    try {
        const allTasks = await Task.find({});
        if (!allTasks || allTasks.length === 0) {
            return res.status(404).json({ message: "No tasks found" }); 
        }
        res.status(200).json({ message: "All tasks fetched successfully", allTasks: allTasks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" }); 
    }
};


module.exports.singleTask = async (req, res) => {
    const taskId = req.params.id; 
    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: "Task not found" }); 
        }

        res.status(200).json({ message: "Task fetched successfully", task: task });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" }); 
    }
};

module.exports.addTask = async (req, res) => {
    const { title, description, completed } = req.body;

    try {
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        const newTask = new Task({ title, description, completed: completed || false });
        await newTask.save();

        res.status(201).json({ message: "Task created successfully", task: newTask }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" }); 
    }
};

module.exports.updateTask = async (req, res) => {
    const taskId = req.params.id;
    const { title, description, completed } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { title, description, completed },
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" }); 
        }

        res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (err) {
        console.error(err);

        res.status(500).json({ message: "Internal server error" }); 
    }
};

module.exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;

    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
    } catch (err) {
        console.error(err);

        res.status(500).json({ message: "Internal server error" }); 
    }
};

