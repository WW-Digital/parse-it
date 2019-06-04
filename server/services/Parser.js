const { MealTimes, Dates } = require('../models/Identifier');
const StopWord = require('../models/StopWord');
const StopWordHelper = require('../routes/StopWord/services/StopWordHelper');
const DateHelper = require('../routes/Dates/services/DateHelper');
const MealTimeHelper = require('../routes/MealTimes/services/MealTimeHelper');

const StopWordService = new StopWordHelper();
const MealTimeService = new MealTimeHelper();
const DateService = new DateHelper();
class Parser {
	//TODO Parse through and identify all StopWords & Identifiers
	// looks for matches between the query given in a get request and a given array
	lookForMatchesInArray(arrayToSearch, query, typeOfItem) {
		if (typeOfItem == 'stopword') {
			// we need to just search the given array in this case
			if (arrayToSearch.includes(query.toLowerCase())) {
				return {
					status: 'success',
					data: [{ value: query, type: 'stopword' }]
				};
			}
			return {
				status: 'failure',
				data: []
			};
		}
		let holder = [];
		for (let i = 0; i < arrayToSearch.length; i++) {
			// iterate  through the arry of items and look for a match
			if (arrayToSearch[i].names.includes(query.toLowerCase())) {
				// if the name is in the array of names of JSON
				// if we have a match
				let newMatch = { value: arrayToSearch[i].value, type: typeOfItem };
				holder.push(newMatch);
			}
		}
		if (holder.length == 0) {
			// report if there is a failure
			return { status: 'failure', data: [] }; // return the failure
		}
		return { status: 'success', data: holder }; // return the passed data
	}

	// analyzes a given taken for task 5 and returns JSON that categorizes the token.
	analyzeToken(inputString) {
		let data = { matchedWord: '', type: '', value: '' };
		if (StopWordService.isStopWord(inputString)) {
			// if we have a stop word
			const word = StopWordService.getStopWord(inputString);
			return {
				matchedWord: word.toLowerCase(),
				type: 'stop word',
				value: word
			};
		} else if (DateService.isDateWord(inputString)) {
			// if we have a date word
			const dateValue = DateService.getDateValue(inputString);
			return { matchedWord: inputString, type: 'date', value: dateValue.value };
		} else if (MealTimeService.isMealTimeWord(inputString)) {
			// if we have a meal time word
			const mealTimeValue = MealTimeService.getMealTimeValue(inputString);
			return {
				matchedWord: inputString,
				type: 'mealtime',
				value: mealTimeValue.value
			};
		} else {
			// if we have an unkwon  word
			return {
				matchedWord: inputString,
				type: 'unknown',
				value: inputString.toLowerCase()
			};
		}
	}
}

module.exports = Parser;
