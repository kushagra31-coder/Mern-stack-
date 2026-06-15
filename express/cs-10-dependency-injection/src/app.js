const express = require("express");

const AppointmentService = require(
    "./src/services/appointmentService"
);

const SMSService = require(
    "./src/notifications/smsService"
);

const StripeBillingService = require(
    "./src/billing/stripeBillingService"
);

const app = express();

app.use(express.json());

const notifier = new SMSService();

const billing = new StripeBillingService();

const appointmentService =
    new AppointmentService(
        notifier,
        billing
    );

app.post("/appointments", async (req, res) => {
    try {
        const result =
            await appointmentService.bookAppointment(
                req.body.patient,
                req.body.time,
                req.body.amount
            );

        res.json(result);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log(
        "Clinic system running on port 3000"
    );
});