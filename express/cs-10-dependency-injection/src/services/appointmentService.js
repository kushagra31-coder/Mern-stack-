class AppointmentService {
    constructor(
        notifier,
        billing
    ) {
        this.notifier =
            notifier;

        this.billing =
            billing;
    }

    async bookAppointment(
        patient,
        time,
        amount
    ) {
        await this.billing.charge(
            patient,
            amount
        );

        await this.notifier.send(
            patient,
            `Your appointment is booked for ${time}`
        );

        return {
            status:
                "confirmed"
        };
    }
}

module.exports =
    AppointmentService;