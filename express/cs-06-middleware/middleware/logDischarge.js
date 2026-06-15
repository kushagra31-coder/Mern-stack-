function logDischarge(req, res, next) {
    req.dischargeLog = [];

    req.dischargeLog.push({
        step: "requestReceived",
        time: new Date().toISOString()
    });

    next();
}

module.exports = logDischarge;