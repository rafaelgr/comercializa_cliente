"use strict";
const Express = require('express');
const Pack = require('../../package.json');
const Dotenv = require('dotenv');

var router = Express.Router();
Dotenv.config();

router.get('/', (req, res) => {
    var config = {
        urlApi: process.env.BASE_URLAPI || 'http://localhost:5000',
        urlClient: process.env.BASE_URLCLIENT || "",
        one_push_url: process.env.ONE_PUSH_URL,
        one_app_id: process.env.ONE_APP_ID,
        one_api_key: process.env.ONE_API_KEY,
        mailjet_api_key: process.env.MAILJET_API_KEY,
        mailjet_api_secret: process.env.MAILJET_API_SECRET
    }
    res.json(config);
});

module.exports = router;