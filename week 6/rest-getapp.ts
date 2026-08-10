import express from "express";
import type { Request, Response } from "express";

const app = express();

const PORT = 3000;

// 1. BASIC JSON RESPONSE
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Welcome to our API!",
        status: "Active",
        timestamp: new Date()
    });
});

// 2. SENDING AN ARRAY OF OBJECTS
app.get("/students", (req: Request, res: Response) => {

    const studentList = [
        {
            id: 101,
            name: "Alice",
            course: "MERN Stack"
        },
        {
            id: 102,
            name: "Bob",
            course: "Data Science"
        },
        {
            id: 103,
            name: "Charlie",
            course: "UI/UX"
        }
    ];

    res.json(studentList);
});

// 3. DYNAMIC JSON RESPONSE
app.get("/product/:id", (req: Request, res: Response) => {

    const productId = req.params.id;

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: [
            "gadget",
            "new-arrival"
        ]
    });
});

// START SERVER
app.listen(PORT, () => {
    console.log(
        `JSON Server is running at http://localhost:${PORT}`
    );
});