const express = require("express");

const router = express.Router();

const bakingOrders = require(
    "../data/baking"
);

router.post("/start", (req, res) => {
    const { orderId } = req.body;

    const bakingOrder = {
        orderId,
        status: "Baking"
    };

    bakingOrders.push(bakingOrder);

    res.status(201).json({
        status: "success",
        data: bakingOrder
    });
});

router.get("/status/:id", (req, res) => {
    const order = bakingOrders.find(
        order => order.orderId === req.params.id
    );

    if (!order) {
        return res.status(404).json({
            status: "error",
            error: "Baking order not found"
        });
    }

    res.json({
        status: "success",
        data: order
    });
});

module.exports = router;