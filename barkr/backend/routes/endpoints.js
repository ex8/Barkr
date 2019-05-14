const express = require('express');
const passport = require('passport');
const petController = require('../controllers/pet');

const router = express.Router();

router.get(`/me`, passport.authenticate(`jwt`, {session: false}), petController.me);
router.post(`/signup`, petController.signUp);
router.post(`/login`, petController.login);
router.post(`/add-like`, passport.authenticate(`jwt`, {session: false}), petController.addLikedPet);
router.get(`/pets-around`, passport.authenticate(`jwt`, {session: false}), petController.petsAround);

module.exports = router;
