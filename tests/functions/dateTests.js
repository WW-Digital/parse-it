const axios = require('axios');

const functions = {
	getAllDates: () =>
		axios
			.get('http://localhost:3000/Dates/dates')
			.then(res => res.data)
			.catch(err => `error in getAllDates ${err}`),

	getToday: () =>
		axios
			.get('http://localhost:3000/Dates/dates?query=today')
			.then(res => res.data)
			.catch(err => `error in getToday ${err}`),
	getYesterday: () =>
		axios
			.get('http://localhost:3000/Dates/dates?query=yesterday')
			.then(res => res.data)
			.catch(err => `error in getYesterday ${err}`),
	getTomorrow: () =>
		axios
			.get('http://localhost:3000/Dates/dates?query=tomorrow')
			.then(res => res.data)
			.catch(err => `error in getTomorrow ${err}`),
	getAnUnknownDate: () =>
		axios
			.get('http://localhost:3000/Dates/dates?query=abcdef')
			.then(res => res.data)
			.catch(err => `error in getUnkownDate ${err}`)
};

module.exports = functions;
