const express = require("express");

const router = express.Router();

const members = require("../data/members");

const validateTransfer = require("../middleware/validateTransfer");

router.post("/redeem", (req, res) => {
    const { customerId, points } = req.body;

    const member = members.find(
        member => member.id === customerId
    );

    if (!member) {
        return res.status(404).json({
            status: "error",
            error: "Customer not found"
        });
    }

    if (member.points < points) {
        return res.status(400).json({
            status: "error",
            error: "Insufficient points"
        });
    }

    member.points -= points;

    res.status(200).json({
        status: "success",
        data: {
            customerId,
            remainingPoints: member.points
        }
    });
});

router.post(
    "/transfer",
    validateTransfer,
    (req, res) => {
        const {
            fromCustomerId,
            toCustomerId,
            points
        } = req.body;

        const sender = members.find(
            member => member.id === fromCustomerId
        );

        const receiver = members.find(
            member => member.id === toCustomerId
        );

        if (!sender) {
            return res.status(404).json({
                status: "error",
                error: "Sender not found"
            });
        }

        if (!receiver) {
            return res.status(404).json({
                status: "error",
                error: "Receiver not found"
            });
        }

        if (sender.points < points) {
            return res.status(400).json({
                status: "error",
                error: "Insufficient points"
            });
        }

        sender.points -= points;
        receiver.points += points;

        res.status(200).json({
            status: "success",
            data: {
                fromCustomerId,
                toCustomerId,
                transferredPoints: points
            }
        });
    }
);

module.exports = router;