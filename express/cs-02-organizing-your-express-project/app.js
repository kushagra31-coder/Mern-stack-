const express = require("express");

const eventsRouter = require("./routes/events");
const classesRouter = require("./routes/classes");
const contactRouter = require("./routes/contact");

const app = express();

app.use(express.json());

app.use("/events", eventsRouter);
app.use("/classes", classesRouter);
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
    res.send("Welcome to Greenfield Community Center!");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});