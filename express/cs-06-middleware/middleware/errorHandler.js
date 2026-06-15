function errorHandler(err, req, res, next) {
    console.error("Discharge Log:", req.dischargeLog);

    res.status(500).json({
        error: err.message || "Internal Server Error"
    });
}

module.exports = errorHandler;