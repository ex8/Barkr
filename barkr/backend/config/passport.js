const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Pet = require('../models/pet');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `SUPERSECRET`
};

passport.use(new JwtStrategy(opts, (payload, done) => {
    Pet.findOne({id: payload.id})
        .then(pet => done(null, pet))
        .catch(err => done(err, false))
}));

module.exports = passport;
