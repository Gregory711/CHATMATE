const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.CHATBOTSPORT || 3000;

app.listen(port, () => {
    console.log(`Chatbots server listening on port ${port}`);
});