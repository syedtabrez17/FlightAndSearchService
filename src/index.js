const express = require('express');

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // Create the express object
    const app = express();
    app.listen(PORT, () => {
        console.log(`Sever started at ${PORT}`);
    });

}


setupAndStartServer();
