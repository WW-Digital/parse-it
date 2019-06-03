const { stopWordList } = require('../../../models/StopWord');
class StopWordHelper {
	isStopWord(word) {
		//TODO Fill this in
		return stopWordList.includes(word.toLowerCase());
	}

	getStopWord(word) {
		for (var i = 0; i < stopWordList.length; i++) {
			if (stopWordList[i] == word.toLowerCase()) {
				return word;
			}
		}
	}
}
module.exports = StopWordHelper;
