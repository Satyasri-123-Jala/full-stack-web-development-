import express from "express";

const app = express();

const PORT: number = 3000;

// 1. ROUTE PARAMETERS
app.get("/user/:id", (req, res) => {
    const userId: string = req.params.id;

    res.send(
        `<h1>User Profile</h1><p>You are viewing the profile for User ID: <strong>${userId}</strong></p>`
    );
});

// 2. MULTIPLE ROUTE PARAMETERS
app.get("/flights/:from/:to", (req, res) => {
    const { from, to } = req.params;

    res.send(
        `Searching for flights departing from <b>${from}</b> arriving at <b>${to}</b>.`
    );
});

// 3. QUERY PARAMETERS
app.get("/search", (req, res) => {
    const { category, sort } = req.query;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});