const tests = require('../functions/stopwordTests');
const { stopWordList } = require('../../server/models/StopWord');

test('should return a list of all stowords and a status of success', () => {
	//expect.assertions(1);
	return tests.getAllStopWords().then(data => {
		expect(data).toEqual({ status: 'success', data: stopWordList });
	});
});

test('should return a single stopword with value = "an" and type=stopword', () => {
	return tests.getAStopWord('an').then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: 'an', type: 'stopword' }]
		});
	});
});

test('should return a single stopword with value = further and type=stopword', () => {
	return tests.getAStopWord('further').then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: 'further', type: 'stopword' }]
		});
	});
});

test("should return a failure since the word won't be recognized", () => {
	return tests.getAnUnknownWord().then(data => {
		expect(data).toEqual({
			status: 'failure',
			data: []
		});
	});
});
