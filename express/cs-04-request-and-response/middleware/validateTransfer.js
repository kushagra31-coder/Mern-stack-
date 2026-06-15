function validateTransfer(req, res, next) {
    const { fromCustomerId, toCustomerId, points } = req.body;

    if (!fromCustomerId || !toCustomerId) {
        return res.status(400).json({
            status: "error",
            error: "Customer IDs are required"
        });
    }

    if (!Number.isInteger(points) || points <= 0) {
        return res.status(400).json({
            status: "error",
            error: "Points must be a positive integer"
        });
    }

    next();
}

module.exports = validateTransfer;