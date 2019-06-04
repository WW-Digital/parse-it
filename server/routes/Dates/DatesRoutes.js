const express = require('express');
const { Dates } = require('../../models/Identifier');
const parserHelper = require('../../services/Parser');
const parser = new parserHelper();
const router = express.Router();

// TASK 2
router.get('/dates', (req, res) => {
	const { query } = req.query;
	if (!query) {
		// if no query is given in the url
		const resultingJSON = { status: 'success', data: Dates };
		return res.json(resultingJSON);
	} else {
		return res.json(parser.lookForMatchesInArray(Dates, query, 'date'));
	}
});

module.exports = router;
