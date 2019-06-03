const express = require('express');
const status = require('http-status');
const DatesClass = require('../../services/Dates.js');
const router = express.Router();

const DatesHelper = new DatesClass();

router.get('/dates', (req, res) => {
    try {
        const {query} = req.query;
        res.send(DatesHelper.outputJSON(query));
    } catch (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send(err);
    }
    
});

module.exports = router;