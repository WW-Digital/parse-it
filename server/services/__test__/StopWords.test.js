const StopWordClass = require('../StopWords.js')

const StopWordHelper = new StopWordClass();

test('Checking some valid inputs', () => {
    expect(StopWordHelper.findElementInStopWord("a")).toEqual('a');
    expect(StopWordHelper.findElementInStopWord("about")).toEqual('about');
    expect(StopWordHelper.findElementInStopWord("you")).toEqual('you');
    expect(StopWordHelper.findElementInStopWord("bonjour")).toEqual(undefined);
});

test('Checking the isStopWord function', () => {
    expect(StopWordHelper.isStopWord("a")).toEqual(true);
    expect(StopWordHelper.isStopWord("about")).toEqual(true);
    expect(StopWordHelper.isStopWord("aggressive")).toEqual(false);
    expect(StopWordHelper.isStopWord("bonjour")).toEqual(false);
})

test('Checking the outputJSON function', () => {
    expect(StopWordHelper.outputJSON("a")).toEqual({
        status: 'success',
        data: [{
            value: 'a',
            type: 'stop word',
        }],
    });
    expect(StopWordHelper.outputJSON("abcde")).toEqual({
        status: 'failure',
        data: [{
            value: 'abcde',
            type: 'unknown',
        }],
    });
})