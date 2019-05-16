const express = require('express');
const passport = require('passport');
const petController = require('../controllers/pet');
const upload = require('../config/multer');

const router = express.Router();

router.get(`/me`, passport.authenticate(`jwt`, {session: false}), petController.me);
router.post(`/signup`, petController.signUp);
router.post(`/login`, petController.login);
router.post(`/add-like`, passport.authenticate(`jwt`, {session: false}), petController.addLikedPet);
router.get(`/pets-around`, passport.authenticate(`jwt`, {session: false}), petController.petsAround);
router.post(`/update-pet`, passport.authenticate(`jwt`, {session: false}), petController.updatePet);
router.post(`/upload-pet-image`, 
    passport.authenticate(`jwt`, {session: false}), 
    upload.single(`thumbnail`),
    petController.uploadPetImage);

module.exports = router;
