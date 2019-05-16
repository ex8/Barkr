const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const createError = require('http-errors');
const passport = require('./config/passport');

const apiRouter = require('./routes/endpoints');

const app = express();

// mongodb
mongoose.connect(`mongodb://mongodb:27017/barkr`, {useNewUrlParser: true})
    .then(() => console.log(`MongoDB connection running...`))
    .catch(err => {
        console.error(`MongoDB connection error: ${err}`);
        createError(500);
    });

// middleware
app.use(logger(`dev`));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());

// routes
app.use(`/api`, apiRouter);

app.listen(5000, () => console.log(`Backend service running...`));
