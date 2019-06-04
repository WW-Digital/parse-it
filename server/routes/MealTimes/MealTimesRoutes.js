const express = require('express');
const { MealTimes } = require('../../models/Identifier');
const parserTool = require('../../services/Parser');
const parser = new parserTool();
const router = express.Router();
// TASK 1
router.get('/mealtimes', (req, res) => {
	const { query } = req.query;
	if (!query) {
		// if there is no query given in the url
		const resultingJSON = { status: 'success', data: MealTimes };
		return res.json(resultingJSON);
	} else {
		return res.json(parser.lookForMatchesInArray(MealTimes, query, 'mealtime'));
	}
});

module.exports = router;
