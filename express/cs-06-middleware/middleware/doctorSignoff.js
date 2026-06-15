function doctorSignoff(req, res, next) {
    if (!req.body.doctorSigned) {
        return res.status(400).json({
            error: "Doctor sign-off required before discharge."
        });
    }

    req.dischargeLog.push({
        step: "doctorSignoff",
        time: new Date().toISOString()
    });

    next();
}

module.exports = doctorSignoff;