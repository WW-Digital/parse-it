const { Dates } = require('../models/Identifier.js');

module.exports = class DatesHelper {

    findElementInDates(query) {
        const res = Dates.find((element) => {
            return element.names.indexOf(query) != -1;
        });
        return res;
    }

    isDates(query) {
        const target = Dates.find((element) => {
            return element.names.indexOf(query) != -1;
        });
        return !(target === undefined);
    }

    outputJSON(query) {
        if (query === undefined) { // returns all
            const dates = Dates;
            const response = {
                status: 'success',
                data: dates,
            };
            return response;
        } else {
            const target = this.findElementInDates(query);
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
                        type: 'dates',
                    }],
                }
                return output;
            } 
        }
    }
};