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

    outputJSON(query, pageNum, size) {
        if (query === undefined) { // returns all
            const response = this.pagingResult(pageNum, size);
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

    pagingResult(pageNum, size) {
        if (pageNum <= 0) {
            const response = {
                "error" : true, 
                "message" : "invalid page number, should start with 1"
            };
            return response;
        } else {
            const query = {
                start: size * (pageNum - 1),
                end: size * pageNum < stopWordList.length ? size * pageNum : stopWordList.length,
            };
            const response = [];
            const data = [];
            for (let i = query.start; i < query.end; i++) {
                data.push(stopWordList[i]);
            }
            if (data.length == 0) {
                response.push('Invalid pageNumber...');
            } else {
                const remain = Math.ceil(stopWordList.length / size) - pageNum;
                response.push({
                    'data': data,
                    'Remain pages: ': remain,
                });
            }
            return response;
        }
    }
}