const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Greenfield Community Center!");
});

app.get("/events", (req, res) => {
    const events = [
        "Yoga Class - Monday 7pm",
        "Gardening Workshop - Wednesday 5pm",
        "Book Club - Friday 6pm"
    ];

    res.json(events);
});

app.get("/contact", (req, res) => {
    res.json({
        email: "info@greenfieldcenter.com",
        phone: "+1 555 123 4567"
    });
});

app.listen(port, () => {
    console.log(`Community Center server running at http://localhost:${port}`);
});