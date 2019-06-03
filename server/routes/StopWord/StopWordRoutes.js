const express = require('express');
const { stopWordList } = require('../../models/StopWord');
const parserTool = require('../../services/Parser');
const router = express.Router();
const parser = new parserTool();
// TASK 3
router.get('/stopword', (req, res) => {
	const { query } = req.query;
	if (!query) {
		// if no query is given in the url
		const resultingJSON = { status: 'success', data: stopWordList };
		return res.json(resultingJSON);
	} else {
		return res.json(
			parser.lookForMatchesInArray(stopWordList, query, 'stopword')
		); // return the matches
	}
});

module.exports = router;
