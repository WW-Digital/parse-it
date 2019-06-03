const express = require('express');
const status = require('http-status');
const StopWordClass = require('../../services/StopWords.js');
const router = express.Router();

const StopWordHelper = new StopWordClass();

router.get('/stopwords', (req, res) => {
    try {
        const { query } = req.query;
        res.send(StopWordHelper.outputJSON(query));
    } catch (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send(err);
    }
});

module.exports = router;