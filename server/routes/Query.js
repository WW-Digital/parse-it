const express = require('express');
const router = express.Router();
const Parser = require('../services/Parser');

// TASK 5
const parserObj = new Parser();
router.post('/query', (req, res) => {
	const { Query } = req.body;
	let holder = [];
	if (!Query) {
		// if we have a bad POST
		return { status: 'failure', data: [] };
	} else {
		const tokens = Query.split(' '); // array of tokens
		for (let i = 0; i < tokens.length; i++) {
			// categorize each token
			holder.push(parserObj.analyzeToken(tokens[i]));
		}
	}
	const resultingJSON = { status: 'success', data: holder };
	return res.json(resultingJSON);
});

module.exports = router;
