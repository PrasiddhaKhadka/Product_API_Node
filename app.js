require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const notFoundMiddleWare = require("./middlewares/not_found");
const errorHandlerMiddleWare = require("./middlewares/error_handler");

// Routes
const productRouter = require("./routes/products");

// DATABASE CONNECTION
const connectDB = require("./db/connect");


//PORT NUMBER
const PORT_NUMBER = 8000;

// MIDDLE WARES
app.use(express.json());


// ROUTES
app.get("/", (req, res) => {
    console.log(req.baseUrl);
    return res.status(200).json({
        message: "Welcome to product api"
    })
})


app.use('/api/v1/products', productRouter);


app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

// SERVER STARTING 
const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL).then(() => {
            console.log("Database connected");
             app.listen(PORT_NUMBER, () => {
            console.log(`Server started at port ${PORT_NUMBER}`);
        })
        });
       
    }
    catch(err){
        console.log(err);
    }

}

start();