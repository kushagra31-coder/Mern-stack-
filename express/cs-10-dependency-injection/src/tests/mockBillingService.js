class MockBillingService {
    constructor() {
        this.charges = [];
    }

    async charge(
        patient,
        amount
    ) {
        this.charges.push({
            patient,
            amount
        });
    }
}

module.exports =
    MockBillingService;