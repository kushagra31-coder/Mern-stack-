const express = require("express");

const loyaltyRouter = require("./routes/loyalty");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/loyalty", loyaltyRouter);

app.get("/", (req, res) => {
    res.send("FreshMart Loyalty API");
});

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});