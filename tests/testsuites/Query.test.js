const tests = require('../functions/queryTests');
const { Dates } = require('../../server/models/Identifier');

const helloWorldSolution = [
	{
		matchedWord: 'Today',
		type: 'date',
		value: '10-08-2018'
	},
	{
		matchedWord: 'is',
		type: 'stop word',
		value: 'is'
	},
	{
		matchedWord: 'your',
		type: 'stop word',
		value: 'your'
	},
	{
		matchedWord: 'Hello',
		type: 'unknown',
		value: 'hello'
	},
	{
		matchedWord: 'World',
		type: 'unknown',
		value: 'world'
	},
	{
		matchedWord: 'test',
		type: 'unknown',
		value: 'test'
	}
];

const oneOfEachSolution = [
	{
		matchedWord: 'Today',
		type: 'date',
		value: '10-08-2018'
	},
	{
		matchedWord: 'supper',
		type: 'mealtime',
		value: 'evening'
	},
	{
		matchedWord: 'but',
		type: 'stop word',
		value: 'but'
	}
];
// apple Egypt world SPace
const noneSolution = [
	{
		matchedWord: 'apple',
		type: 'unknown',
		value: 'apple'
	},
	{
		matchedWord: 'Egypt',
		type: 'unknown',
		value: 'egypt'
	},
	{
		matchedWord: 'world',
		type: 'unknown',
		value: 'world'
	},
	{
		matchedWord: 'SPace',
		type: 'unknown',
		value: 'space'
	}
];

test('should return each word in the string categorized according to type, matchedword , and value', () => {
	return tests.queryHelloWorld().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: helloWorldSolution
		});
	});
});

test('should return each word in the string categorized according to type, matchedword, and value with one of each category in the string', () => {
	return tests.queryOneOfEach().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: oneOfEachSolution
		});
	});
});

test('should return each word in the string categorized according to type, matchedword, and value with none of the categories in the string', () => {
	return tests.queryNone().then(data => {
		expect(data).toEqual({
			status: 'success',
			data: noneSolution
		});
	});
});
