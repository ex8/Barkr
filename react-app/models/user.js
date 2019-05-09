const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Incomplete
const userSchema = new Schema({
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
    }
});
const User = mongoose.model