const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const notFoundMiddleWare = require("./middlewares/not_found");

//PORT NUMBER
const PORT_NUMBER = 8000;

// MIDDLE WARES
app.use(express.json());

// ROUTES


// SERVER STARTING 
app.listen(PORT_NUMBER, () => {
    console.log(`Server started at ${PORT_NUMBER}`);
})