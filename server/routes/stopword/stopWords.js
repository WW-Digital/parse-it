const express = require('express');
const status = require('http-status');
const StopWordClass = require('../../services/StopWords.js');
const router = express.Router();

const StopWordHelper = new StopWordClass();

router.get('/stopwords', (req, res) => {
    try {
        const { query, pageNum, size } = req.query;
        console.log(pageNum, size);
        res.send(StopWordHelper.outputJSON(query, pageNum, size));
    } catch (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send(err);
    }
});

module.exports = router;