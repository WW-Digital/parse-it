const { MealTimes } = require('../../../models/Identifier');
class MealTimeHelper {
	isMealTimeWord(inputString) {
		for (let i = 0; i < MealTimes.length; i++) {
			if (MealTimes[i].names.includes(inputString.toLowerCase())) {
				// if array has this value then we have a match
				return true;
			}
		}
		return false;
	}

	getMealTimeValue(inputString) {
		for (let i = 0; i < MealTimes.length; i++) {
			// return the value that had a match
			if (MealTimes[i].names.includes(inputString.toLowerCase())) {
				return MealTimes[i];
			}
		}
	}
}
module.exports = MealTimeHelper;
