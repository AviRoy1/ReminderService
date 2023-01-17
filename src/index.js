const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const setupJob = require('./utils/job');
const {sendBasicEmail} = require('./services/email-service');
const  TicketController = require('./controller/ticket-controller');
const { createChannel } = require('./utils/messagequeue');
const m = require('./models/notificationticket');

const app = express();

const createNexServer = async ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
   // const channel = await createChannel();
    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
       // setupJob();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'ravijit512@gmail.com',
        //     'This is a testing email....',
        //     'Hey,how are you?'
        // )
    });
}

createNexServer();