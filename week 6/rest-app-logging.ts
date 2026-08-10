import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();

const PORT = 3000;

// 1. BUILT-IN MIDDLEWARE
app.use(express.json());

// 2. CUSTOM LOGGING MIDDLEWARE
app.use((req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toLocaleString();

    console.log(
        `[${timestamp}] Incoming Request: ${req.method} to ${req.url}`
    );

    next();
});

// 3. CUSTOM SECURITY MIDDLEWARE
app.use((req: Request, res: Response, next: NextFunction) => {
    const userAgent = req.get("User-Agent");

    if (!userAgent) {
        res.status(400).json({
            error: "Browser identification missing!"
        });
        return;
    }

    next();
});

// 4. MOCK DATABASE
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

// 5. GET
app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasks);
});

// 6. POST
app.post("/tasks", (req: Request, res: Response) => {

    const newTask: Task = {
        id: req.body.id !== undefined
            ? Number(req.body.id)
            : tasks.length + 1,

        title: String(req.body.title)
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// 7. PUT
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

// 8. DELETE
app.delete("/tasks/:id", (req: Request, res: Response) => {

    const id = Number(req.params.id);

    tasks = tasks.filter((t: Task) => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

// 9. START SERVER
app.listen(PORT, () => {

    console.log("-----------------------------");
    console.log("Listening for requests...");
    console.log(
        `REST API Server running at http://localhost:${PORT}`
    );
    console.log("-----------------------------");

});