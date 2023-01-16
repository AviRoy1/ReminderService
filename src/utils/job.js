const cron = require('node-cron');
const emailService = require('../services/email-service');

const setupJob = ()=>{
    cron.schedule('*/1 * * * *',async()=>{
        const response = await emailService.fetchPendingEmails();
        console.log(response);
        response.forEach((email) => {
            emailService.sendBasicEmail(
                "airlineservice3@gmail.com",
                email.recepientEmail,
                email.subject,
                email.content,
            )
        })
        console.log(response);
    })
}

module.exports = setupJob;