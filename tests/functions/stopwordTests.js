const axios = require('axios');

const functions = {
	getAllStopWords: () =>
		axios
			.get('http://localhost:3000/StopWords/stopword')
			.then(res => res.data)
			.catch(err => `error in getAllStopWords ${err}`),

	getAStopWord: word =>
		axios
			.get(`http://localhost:3000/StopWords/stopword?query=${word}`)
			.then(res => res.data)
			.catch(err => `error in getAaStopWord ${err}`),
	getAnUnknownWord: () =>
		axios
			.get('http://localhost:3000/StopWords/stopword?query=abcdef')
			.then(res => res.data)
			.catch(err => `error in anUnkownWord ${err}`),
	getTenItemsPageTwo: (pageNumber, size) =>
		axios
			.get(
				`http://localhost:3000/StopWords/stopword?pageNumber=${pageNumber}&size=${size}`
			)
			.then(res => res.data)
			.catch(err => `error in getTenitems`)
};

module.exports = functions;
