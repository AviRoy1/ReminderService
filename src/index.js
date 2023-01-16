const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const setupJob = require('./utils/job');
const {sendBasicEmail} = require('./services/email-service');
const  TicketController = require('./controller/ticket-controller');

const app = express();

const createNexServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        setupJob();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'ravijit512@gmail.com',
        //     'This is a testing email....',
        //     'Hey,how are you?'
        // )
    });
}

createNexServer();