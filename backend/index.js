const express = require('express');
const mongoose = require('mongoose');
const Product = require("./src/models/product.model.js");
const productRoute = require("./src/routes/product.route.js");
const app = express();

app.use(express.json());

app.use("/api/products",productRoute)

app.get("/", (req,res)=>{
    res.send("Hello")
});

mongoose.connect('mongodb+srv://dzieppe:3wZWi7S6uQFbm0Bn@back.imrwm.mongodb.net/node-api?retryWrites=true&w=majority&appName=back')
.then(() => {
    console.log('Connected! to the DataBase');
    app.listen(5000, () => { console.log("Server is running")});
});