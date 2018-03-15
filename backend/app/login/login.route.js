const express = require('express');
const router = module.exports = express.Router();
var access = require('./login.controller.js');

    // Retrieve user info from sso
    router.post('/', access.login);

    // User success call back
    router.get('/success', access.success);

    // Authorization check for current session
    router.get('/check', access.check);

