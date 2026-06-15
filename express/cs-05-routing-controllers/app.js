const express = require("express");

const orderController = require(
    "./controllers/orderController"
);

const bakingController = require(
    "./controllers/bakingController"
);

const logger = require(
    "./middleware/logger"
);

const app = express();

app.use(express.json());

app.use(logger);

app.use("/orders", orderController);

app.use("/baking", bakingController);

app.get("/", (req, res) => {
    res.send(
        "Crumb & Craft Bakery API"
    );
});

const port = 3000;

app.listen(port, () => {
    console.log(
        `Server running on http://localhost:${port}`
    );
});