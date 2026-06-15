function validateOrder(req, res, next) {
    const {
        customerName,
        flavor,
        quantity,
        pickupDate
    } = req.body;

    if (
        !customerName ||
        !flavor ||
        !quantity ||
        !pickupDate
    ) {
        return res.status(400).json({
            status: "error",
            error: "All fields are required"
        });
    }

    if (quantity < 1 || quantity > 100) {
        return res.status(400).json({
            status: "error",
            error: "Quantity must be between 1 and 100"
        });
    }

    next();
}

module.exports = validateOrder;