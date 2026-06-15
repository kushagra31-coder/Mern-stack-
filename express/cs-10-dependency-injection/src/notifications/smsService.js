class SMSService {
    async send(
        to,
        message
    ) {
        console.log(
            `SMS sent to ${to}: ${message}`
        );
    }
}

module.exports =
    SMSService;