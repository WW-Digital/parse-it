const axios = require('axios');

const functions = {
	getAllDinnerTimes: () =>
		axios
			.get('http://localhost:3000/MealTimes/mealtimes')
			.then(res => res.data)
			.catch(err => `error in getAllDinnerTimes ${err}`),
	getADinnerTime: () =>
		axios
			.get('http://localhost:3000/MealTimes/mealtimes?query=supper')
			.then(res => res.data)
			.catch(err => `error in getADinnerTime ${err}`),
	getALunchTime: () =>
		axios
			.get('http://localhost:3000/MealTimes/mealtimes?query=mid day')
			.then(res => res.data)
			.catch(err => `error in getALunchtime ${err}`),

	getAMorningTime: () =>
		axios
			.get('http://localhost:3000/MealTimes/mealtimes?query=breakfast')
			.then(res => res.data)
			.catch(err => `error in getAMorningTime ${err}`),
	getAnAnytimeMeal: () =>
		axios
			.get('http://localhost:3000/MealTimes/mealtimes?query=snack')
			.then(res => res.data)
			.catch(err => `error in getAnAnytimeMeal ${err}`),
	getAnUnkownTime: () =>
		axios
			.get('http://localhost:3000/MealTimes/mealtimes?query=abcdef')
			.then(res => res.data)
			.catch(err => `error in getAnUnkownTime ${err}`)
};
module.exports = functions;
