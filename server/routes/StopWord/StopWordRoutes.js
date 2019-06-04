const express = require('express');
const { stopWordList } = require('../../models/StopWord');
const StopWordHelper = require('../StopWord/services/StopWordHelper');
const parserTool = require('../../services/Parser');
const router = express.Router();
const parser = new parserTool();
const Paginater = new StopWordHelper();
// TASK 3
router.get('/stopword', (req, res) => {
	const { pageNumber, size } = req.query;
	const numberOfPages = Math.ceil(stopWordList.length / size);
	const { query } = req.query;
	if (!query) {
		if (pageNumber) {
			const resultingData = Paginater.Paginate(stopWordList, pageNumber, size);
			if (resultingData.length > 0) {
				const resultingJSON = {
					status: 'success',
					data: resultingData,
					numberOfPages
				};
				return res.json(resultingJSON);
			} else {
				const resultingJSON = { status: 'failure', data: [], numberOfPages };
				return res.json(resultingJSON);
			}
		}
		// if no query is given in the url
		const resultingJSON = { status: 'success', data: stopWordList };
		return res.json(resultingJSON);
	} else {
		const matches = parser.lookForMatchesInArray(
			stopWordList,
			query,
			'stopword'
		);
		//Paginate();
		return res.json(matches); // return the matches
	}
});

module.exports = router;
