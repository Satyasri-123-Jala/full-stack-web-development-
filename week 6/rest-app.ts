import express from "express";
import type { Request, Response } from "express";

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Mock Database
interface Task {
    id: number;
    title: string;
}

let tasks: Task[] = [
    {
        id: 1,
        title: "Learn Express"
    },
    {
        id: 2,
        title: "Master REST APIs"
    }
];

// 1. GET - Read all tasks
app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasks);
});

// 2. POST - Create a new task
app.post("/tasks", (req: Request, res: Response) => {

    const newTask: Task = {
        id: req.body.id != null
            ? Number(req.body.id)
            : tasks.length + 1,

        title: String(req.body.title)
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// 3. PUT - Update an existing task
app.put("/tasks/:id", (req: Request, res: Response) => {

    const id = Number(req.params.id);

    const task = tasks.find((t: Task) => t.id === id);

    if (task) {

        task.title = String(req.body.title);

        res.json({
            message: "Task updated successfully",
            task: task
        });

    } else {

        res.status(404).json({
            error: "Task not found"
        });

    }
});

// 4. DELETE - Remove a task
app.delete("/tasks/:id", (req: Request, res: Response) => {

    const id = Number(req.params.id);

    tasks = tasks.filter((t: Task) => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

// Start Server
app.listen(PORT, () => {

    console.log(
        `REST API Server running at http://localhost:${PORT}`
    );

});