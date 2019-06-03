const { stopWordList, isStopWord } = require('../models/StopWord.js');

module.exports = class StopWordHelper {
    findElementInStopWord(query) {
        const res = stopWordList.find((element) => {
            return element === query;
        });
        return res;
    }

    isStopWord(query) {
        return isStopWord(query);
    }

    outputJSON(query) {
        if (query === undefined) { // returns all
            const stopWord = stopWordList;
            const response = {
                status: 'success',
                data: stopWord,
            };
            return response;
        } else {
            const target = this.findElementInStopWord(query);
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
                        value: target,
                        type: 'stop word',
                    }],
                }
                return output;
            } 
        }
    }
}