const axios = require('axios');

const functions = {
	queryHelloWorld: () =>
		axios
			.post('http://localhost:3000/Query/query', {
				Query: 'Today is your Hello World test'
			})
			.then(res => res.data)
			.catch(err => `error in queryHelloWorld`),
	queryOneOfEach: () =>
		axios
			.post('http://localhost:3000/Query/query', {
				Query: 'Today supper but'
			})
			.then(res => res.data)
			.catch(err => `error in queryHelloWorld`),
	queryNone: () =>
		axios
			.post('http://localhost:3000/Query/query', {
				Query: 'apple Egypt world SPace'
			})
			.then(res => res.data)
			.catch(err => `error in queryHelloWorld`)
};

module.exports = functions;
