const express = require("express");

const applicationRouter = require("./routes/application");

const app = express();

app.use(express.json());

app.use("/apply", applicationRouter);

app.get("/", (req, res) => {
    res.send("BrightFuture University Admissions API");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});