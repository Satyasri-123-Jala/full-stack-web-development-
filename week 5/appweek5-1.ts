import express from "express";

const app = express();

const PORT: number = 3000;

app.get("/", (req, res) => {
    res.send("Welcome SVECW! You have reached the Home Page.");
});

app.get("/about", (req, res) => {
    res.send(
        "This server was built as a learning exercise for Express.js by SVECW AI Department."
    );
});

app.get("/api/status", (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});

app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});