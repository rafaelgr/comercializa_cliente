"use strict";
const Express = require('express');
const Pack = require('../../package.json');
const Dotenv = require('dotenv');
var router = Express.Router();
Dotenv.config();

var Mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

router.post('/', (req, res, next) => {
    var data = req.body;
    var sendEmail = Mailjet.post('send');
    sendEmail
        .request(data)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;