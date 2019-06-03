const { MealTimes } = require('../models/Identifier.js');

module.exports = class MealTimesHelper {
    findElementInMealTimes(query) {
        const res = MealTimes.find((element) => {
            return element.names.indexOf(query) != -1;
        });
        return res;
    }

    isMealTimes(query) {
        const target = MealTimes.find((element) => {
            return element.names.indexOf(query) != -1;
        });
        return !(target === undefined);
    }
    
    outputJSON(query) {
        if (query === undefined) { // returns all
            const mealTimes = MealTimes;
            const response = {
                status: 'success',
                data: mealTimes,
            };
            return response;
        } else {
            const target = this.findElementInMealTimes(query);
            if (!target) { // None is found
                const output = {
                    status: 'failure',
                    data: [{ // WHY?????
                        value: query,
                        type: "unknown",
                    }],
                };
                return output;
            } else {
                const output = {
                    status: 'success',
                    data: [{
                        value: target.value,
                        type: 'meal time',
                    }],
                }
                return output;
            } 
        }
    }
}