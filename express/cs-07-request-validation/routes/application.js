const express = require("express");

const { validationResult } = require("express-validator");

const applicationValidation = require(
    "../validations/applicationValidation"
);

const router = express.Router();

router.post(
    "/",
    applicationValidation,
    (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        res.status(200).json({
            status: "Application received!"
        });
    }
);

module.exports = router;