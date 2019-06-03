const ParserClass = require('../Parser.js');
const moment = require('moment');
const ParserHelper = new ParserClass();

test('Checking whichType function', () => {
    expect(ParserHelper.whichType('morning')).toBe('meal time');
    expect(ParserHelper.whichType('lunch')).toBe('meal time');
    expect(ParserHelper.whichType('evening')).toBe('meal time');
    expect(ParserHelper.whichType('about')).toBe('stop word');
    expect(ParserHelper.whichType('a')).toBe('stop word');
    expect(ParserHelper.whichType('today')).toBe('date');
    expect(ParserHelper.whichType('tomorrow')).toBe('date');
    expect(ParserHelper.whichType('yesterday')).toBe('date');
    expect(ParserHelper.whichType('')).toBe('unknown');
});

test('Checking whichValue function', () => {
    expect(ParserHelper.whichValue('morning')).toBe('morning');
    expect(ParserHelper.whichValue('lunch')).toBe('midday');
    expect(ParserHelper.whichValue('evening')).toBe('evening');
    expect(ParserHelper.whichValue('about')).toBe('about');
    expect(ParserHelper.whichValue('a')).toBe('a');
    expect(ParserHelper.whichValue('today')).toBe(moment().format("MM-DD-YYYY"));
    expect(ParserHelper.whichValue('tomorrow')).toBe(moment().add(1, 'day').format("MM-DD-YYYY"));
    expect(ParserHelper.whichValue('yesterday')).toBe(moment().add(-1, 'day').format("MM-DD-YYYY"));
    expect(ParserHelper.whichValue('')).toBe('');
    expect(ParserHelper.whichValue(undefined)).toBe(undefined);
})