import express from "express";
import type { Request, Response } from "express";
import path from "path";
const app = express();

const port = 3000;

// Configure EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Display the form
app.get("/", (req: Request, res: Response) => {

    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });

});

// Accept form inputs
app.post("/register", (req: Request, res: Response) => {

    const { username, age } = req.body;

    // Perform validation
    let errorMessage: string | null = null;

    if (!username || username.length < 3) {

        errorMessage =
            "Username must be at least 3 characters long.";

    } else if (!age || isNaN(Number(age)) || Number(age) < 18) {

        errorMessage =
            "You must be at least 18 years old.";

    }

    // If validation fails
    if (errorMessage) {

        res.render("index", {
            title: "Registration Failed",
            error: errorMessage,
            user: null
        });

    } else {

        // If validation succeeds
        res.render("index", {
            title: "Registration Successful",
            error: null,
            user: username
        });

    }

});

// Start server
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);

});