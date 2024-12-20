const express = require('express');
const passport = require('passport');
const authController = require('../controllers/user'); 

const router = express.Router();

// User Registration
router.post('/register', authController.signup);

// User Login
router.post('/login', passport.authenticate('local', { failureRedirect: '/auth/login-failure' }), authController.login);

// User Logout
router.post('/logout', authController.logout);

module.exports = router;
