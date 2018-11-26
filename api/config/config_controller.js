"use strict";
const Express = require('express');
const Pack = require('../../package.json');
const Dotenv = require('dotenv');

var router = Express.Router();
Dotenv.config();

router.get('/', (req, res) => {
    var config = {
        urlApi: process.env.BASE_URLAPI || 'http://localhost:5000'
    }
    res.json(config);
});

module.exports = router;