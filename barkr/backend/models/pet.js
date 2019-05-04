const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const petSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

petSchema.pre(`save`, function (next) {
    if (!this.isModified(`password`)) return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, (err, hashed) => {
            if (err) return next(err);
            this.password = hashed;
            next();
        });
    });
});

petSchema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) return done(err);
        done(null, isMatch);
    });
};

petSchema.methods.generateJwt = function () {
    return jwt.sign({data: this}, `SUPERSECRET`, {expiresIn: '4h'});
};

const Pet = mongoose.model(`Pet`, petSchema);
module.exports = Pet;
