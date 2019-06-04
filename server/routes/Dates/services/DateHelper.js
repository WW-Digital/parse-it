const { Dates } = require('../../../models/Identifier');
class DateHelper {
	isDateWord(inputString) {
		for (let i = 0; i < Dates.length; i++) {
			if (Dates[i].names.includes(inputString.toLowerCase())) {
				// if array has this value then we have a match
				return true;
			}
		}
		return false;
	}

	getDateValue(inputString) {
		for (let i = 0; i < Dates.length; i++) {
			if (Dates[i].names.includes(inputString.toLowerCase())) {
				return Dates[i]; // return the value that had the match
			}
		}
	}
}
module.exports = DateHelper;
