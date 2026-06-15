const express = require("express");

const router = express.Router();

const orders = require("../data/orders");

const validateOrder = require(
    "../middleware/validateOrder"
);

router.get("/", (req, res) => {
    res.json({
        status: "success",
        data: orders
    });
});

router.get("/:id", (req, res) => {
    const order = orders.find(
        order => order.id === req.params.id
    );

    if (!order) {
        return res.status(404).json({
            status: "error",
            error: "Order not found"
        });
    }

    res.json({
        status: "success",
        data: order
    });
});

router.post(
    "/",
    validateOrder,
    (req, res) => {
        const newOrder = {
            id: (orders.length + 1).toString(),
            ...req.body
        };

        orders.push(newOrder);

        res.status(201).json({
            status: "success",
            data: newOrder
        });
    }
);

module.exports = router;