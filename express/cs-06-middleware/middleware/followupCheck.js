function followupCheck(req, res, next) {
    if (!req.body.followupScheduled) {
        return res.status(400).json({
            error: "Follow-up appointment required."
        });
    }

    req.dischargeLog.push({
        step: "followupCheck",
        time: new Date().toISOString()
    });

    next();
}

module.exports = followupCheck;