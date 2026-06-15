class StripeBillingService {
    async charge(
        patient,
        amount
    ) {
        console.log(
            `Charged ₹${amount} to ${patient}`
        );
    }
}

module.exports =
    StripeBillingService;