const express = require("express");

const router = express.Router();

const logDischarge = require("../middleware/logDischarge");
const doctorSignoff = require("../middleware/doctorSignoff");
const pharmacyReview = require("../middleware/pharmacyReview");
const followupCheck = require("../middleware/followupCheck");
const insuranceCheck = require("../middleware/insuranceCheck");

router.post(
    "/",
    logDischarge,
    doctorSignoff,
    pharmacyReview,
    followupCheck,
    insuranceCheck,
    (req, res) => {
        req.dischargeLog.push({
            step: "dischargeComplete",
            time: new Date().toISOString()
        });

        res.status(200).json({
            status: "Discharge Complete",
            patient: req.body.patientName,
            log: req.dischargeLog
        });
    }
);

module.exports = router;