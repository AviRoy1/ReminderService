const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const app = express();

const createNexServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    });
}

createNexServer();