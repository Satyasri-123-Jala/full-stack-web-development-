import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
declare module "express-session" {
    interface SessionData {
        isLoggedin: boolean;
        username: string;
    }
}
const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Middleware to read cookies
app.use(cookieParser());

// Configure session
app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        }
    })
);

// Authentication middleware
const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (req.session.isLoggedin) {
        next();
    } else {
        res.redirect("/login");
    }
};

// Login page
app.get("/login", (req: Request, res: Response) => {
    res.render("login", {
        error: null
    });
});

// Login
app.post("/login", (req: Request, res: Response) => {

    const { username, password } = req.body;

    // Hardcoded username and password
    if (username === "admin" && password === "123") {

        // Store login information in session
        req.session.isLoggedin = true;
        req.session.username = username;

        // Create a cookie
        res.cookie(
            "lastVisit",
            new Date().toLocaleTimeString()
        );

        // Go to dashboard
        res.redirect("/dashboard");

    } else {

        // Invalid login
        res.render("login", {
            error: "Invalid credentials!"
        });
    }
});

// Private dashboard
app.get(
    "/dashboard",
    authMiddleware,
    (req: Request, res: Response) => {

        // Read cookie
        const lastVisit =
            req.cookies.lastVisit || "First time!";

        // Read session data
        const username = req.session.username;

        res.render("dashboard", {
            user: username,
            lastVisit: lastVisit
        });
    }
);

// Logout
app.get("/logout", (req: Request, res: Response) => {

    req.session.destroy((err) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Unable to logout");
        }

        // Clear session cookie
        res.clearCookie("connect.sid");

        // Go back to login
        res.redirect("/login");
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});