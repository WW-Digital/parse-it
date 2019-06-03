const tests = require('../functions/mealtimeTests');
const { MealTimes } = require('../../server/models/Identifier');

test('should return a list of all mealtimes and there values along with a status code of success', () => {
	return tests.getAllDinnerTimes().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: MealTimes
		});
	});
});

test('should return a lunch time with value = midday and value = mealtime', () => {
	return tests.getALunchTime().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: 'midday', type: 'mealtime' }]
		});
	});
});
test('should return a morning time with value=morning and type=mealTime', () => {
	return tests.getAMorningTime().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: 'morning', type: 'mealtime' }]
		});
	});
});

test('get an anytime meal should return value=anytime, type=mealtime', () => {
	return tests.getAnAnytimeMeal().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: 'anytime', type: 'mealtime' }]
		});
	});
});

test('fetched data should have status success and return the data should have value and type of the data it is in', () => {
	//expect.assertions(1);
	return tests.getADinnerTime().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: [{ value: 'evening', type: 'mealtime' }]
		});
	});
});

test('should return a failure since abcef does not match  any data', () => {
	return tests.getAnUnkownTime().then(data => {
		expect(data).toEqual({
			status: 'failure',
			data: []
		});
	});
});
