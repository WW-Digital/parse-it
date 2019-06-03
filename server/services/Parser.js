const DatesClass = require('../services/Dates');
const MealTimeClass = require('../services/MealTimes.js');
const StopWordClass = require('../services/StopWords.js');

const DatesHelper = new DatesClass();
const MealTimeHelper = new MealTimeClass();
const StopWordHelper = new StopWordClass();

class Parser {
    //TODO Parse through and identify all StopWords & Identifiers

    whichType(word) {
        if (DatesHelper.isDates(word)) {
            return "date";
        } else if (MealTimeHelper.isMealTimes(word)) {
            return "meal time";
        } else if (StopWordHelper.isStopWord(word)) {
            return "stop word";
        } else {
            return "unknown";
        }
    }

    whichValue(word) {
        if (DatesHelper.isDates(word)) {
            return DatesHelper.findElementInDates(word).value;
        } else if (MealTimeHelper.isMealTimes(word)) {
            return MealTimeHelper.findElementInMealTimes(word).value;
        } else if (StopWordHelper.isStopWord(word)) {
            return StopWordHelper.findElementInStopWord(word);
        } else {
            return word;
        }
    }

    outputJSON(query) {
        if (query === undefined) {
            return ('Bad request, cannot enter an empty string');
        } else {
            const wordArray = query.split(' ');
            const queryArray = [];
            for (let i = 0; i < wordArray.length; i++) {
                const temp = {
                    matchedWord: wordArray[i],
                    value: this.whichValue(wordArray[i]),
                    type: this.whichType(wordArray[i]),
                };
                queryArray.push(temp);
            }
            return queryArray;
        }
    }
}

module.exports = Parser;
