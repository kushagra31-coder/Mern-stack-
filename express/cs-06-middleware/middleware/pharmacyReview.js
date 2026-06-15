function pharmacyReview(req, res, next) {
    if (!req.body.pharmacyChecked) {
        return res.status(400).json({
            error: "Pharmacy review required before discharge."
        });
    }

    req.dischargeLog.push({
        step: "pharmacyReview",
        time: new Date().toISOString()
    });

    next();
}

module.exports = pharmacyReview;