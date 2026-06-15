const express = require("express");

const productsRouter = require("./routes/products");

const app = express();

app.use(express.json());

app.use("/products", productsRouter);

app.get("/", (req, res) => {
    res.send("Neighborhood Food Store API");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});