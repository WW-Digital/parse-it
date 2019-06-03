const express = require('express');
const status = require('http-status');
const ParserClass = require('../../services/Parser.js');
const router = express.Router();

const ParserHelper = new ParserClass();

router.post('/query', (req, res) => {
    try {
        const { Query } = req.body;
        res.send(ParserHelper.outputJSON(Query.toLowerCase()));
    } catch (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send(err);
    }
});

module.exports = router;