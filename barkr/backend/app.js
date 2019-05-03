const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const createError = require('http-errors');

const app = express();

// mongodb
mongoose.connect(`mongodb://127.0.0.1:27017/barkr`, {useNewUrlParser: true})
    .then(() => console.log(`MongoDB connection running...`))
    .catch(err => {
        console.error(`MongoDB connection error: ${err}`);
        createError(500);
    });

// middleware
app.use(logger(`dev`));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get(`/api`, (req, res) => {
    res.json({
        success: true,
        message: `Backend micro-service...`
    })
});

app.listen(5000, () => console.log(`Backend service running...`));
