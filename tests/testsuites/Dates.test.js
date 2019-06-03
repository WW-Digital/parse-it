const tests = require('../functions/dateTests');
const { Dates } = require('../../server/models/Identifier');

test('fetched data should have a status of success and all the dates', () => {
	expect.assertions(1);
	return tests.getAllDates().then(data => {
		expect(data).toEqual({ status: 'success', data: Dates });
	});
});

test('should return a JSON obj with value = moments output for today and type = date', () => {
	return tests.getToday().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: Dates[0].value, type: 'date' }]
		});
	});
});

test('should return a JSON obj with value = moments output for yesterday and type = date', () => {
	return tests.getYesterday().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: Dates[1].value, type: 'date' }]
		});
	});
});

test('should return a JSON obj with value = moments output for tomorrow and type = date', () => {
	return tests.getTomorrow().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: Dates[2].value, type: 'date' }]
		});
	});
});

test('should return a status failed as abcdef is not a date', () => {
	return tests.getAnUnknownDate().then(data => {
		expect(data).toEqual({
			status: 'failure',
			data: []
		});
	});
});
