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
	Paginate(inputArray, pageNumber, size) {
		// 5 items per page
		const numberOfPages = Math.ceil(inputArray.length / size);
		let startIndex = size * (pageNumber - 1);
		let data = [];
		for (let i = 0; i < size; i++) {
			if (stopWordList[startIndex] != null) {
				data.push(stopWordList[startIndex++]);
			}
		}
		return data;
	}
}
module.exports = StopWordHelper;
