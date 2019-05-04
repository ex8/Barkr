const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
});

const Pet = mongoose.model(`Pet`, petSchema);
module.exports = Pet;
