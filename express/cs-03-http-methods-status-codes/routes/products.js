const express = require("express");

const router = express.Router();

const products = require("../data/products");

router.get("/", (req, res) => {
    res.status(200).json(products);
});

router.get("/:id", (req, res) => {
    const product = products.find(
        product => product.id === req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
});

router.post("/", (req, res) => {
    const { name, price, inStock } = req.body;

    if (
        !name ||
        price === undefined ||
        inStock === undefined
    ) {
        return res.status(400).json({
            message: "Missing required fields"
        });
    }

    const newProduct = {
        id: (products.length + 1).toString(),
        name,
        price,
        inStock
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
    const index = products.findIndex(
        product => product.id === req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price, inStock } = req.body;

    if (
        !name ||
        price === undefined ||
        inStock === undefined
    ) {
        return res.status(400).json({
            message: "Missing required fields"
        });
    }

    products[index] = {
        id: req.params.id,
        name,
        price,
        inStock
    };

    res.status(200).json(products[index]);
});

router.patch("/:id/price", (req, res) => {
    const product = products.find(
        product => product.id === req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { price } = req.body;

    if (
        typeof price !== "number" ||
        price < 0
    ) {
        return res.status(400).json({
            message: "Invalid price"
        });
    }

    product.price = price;

    res.status(200).json(product);
});

router.patch("/:id/inStock", (req, res) => {
    const product = products.find(
        product => product.id === req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { inStock } = req.body;

    if (typeof inStock !== "boolean") {
        return res.status(400).json({
            message: "Invalid stock status"
        });
    }

    product.inStock = inStock;

    res.status(200).json(product);
});

router.delete("/:id", (req, res) => {
    const index = products.findIndex(
        product => product.id === req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.sendStatus(204);
});

module.exports = router;