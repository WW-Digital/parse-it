const express = require('express');
const status = require('http-status');
const MealTimesClass = require('../../services/MealTimes.js');
const router = express.Router();

const mealTimesHelper = new MealTimesClass();

router.get('/mealtimes', (req, res) => {
    try {
        const {query} = req.query;
        res.send(mealTimesHelper.outputJSON(query.toLowerCase()));
    } catch (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send(err);
    }
});

module.exports = router;

