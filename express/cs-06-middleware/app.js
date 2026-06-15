const express = require("express");

const dischargeRouter = require("./routes/discharge");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/discharge", dischargeRouter);

app.get("/", (req, res) => {
    res.send("CityCare Hospital Discharge API");
});

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});